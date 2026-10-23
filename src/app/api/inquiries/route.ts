import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { InquiryFormData, InquirySubmission } from "@/types/trek";

// File storage path for persistence without requiring external credentials
const DATA_DIR = path.join(process.cwd(), ".data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

// Simple in-memory rate-limiter by IP
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5;

  const current = rateLimitMap.get(ip);
  if (!current || now - current.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (current.count >= maxRequests) {
    return true;
  }

  current.count++;
  return false;
}

function getStoredInquiries(): InquirySubmission[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(INQUIRIES_FILE)) {
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(INQUIRIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading inquiries file:", err);
    return [];
  }
}

function saveInquiry(inquiry: InquirySubmission) {
  try {
    const list = getStoredInquiries();
    list.unshift(inquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list, null, 2));
  } catch (err) {
    console.error("Error writing inquiries file:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    const body: InquiryFormData = await req.json();

    // Server-side validation
    if (!body.fullName || body.fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Full name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!body.phone || body.phone.trim().length < 8) {
      return NextResponse.json(
        { error: "A valid phone number with country code is required." },
        { status: 400 }
      );
    }

    if (!body.preferredTrek) {
      return NextResponse.json(
        { error: "Preferred trek must be selected." },
        { status: 400 }
      );
    }

    if (!body.departureDate) {
      return NextResponse.json(
        { error: "Intended departure date is required." },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { error: "You must accept the privacy policy to proceed." },
        { status: 400 }
      );
    }

    // Create unique inquiry reference
    const inquiryId = "HR-" + Date.now().toString().slice(-6) + Math.floor(Math.random() * 90 + 10);
    const newSubmission: InquirySubmission = {
      ...body,
      id: inquiryId,
      createdAt: new Date().toISOString(),
      status: "new",
    };

    saveInquiry(newSubmission);

    console.log(`[Hinter Roots] New Trek Inquiry Received: ${inquiryId} for ${body.preferredTrek} from ${body.fullName}`);

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully.",
        inquiryId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry. Please contact us via WhatsApp." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Read saved inquiries for admin dashboard
  try {
    const list = getStoredInquiries();
    return NextResponse.json({ inquiries: list }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}
