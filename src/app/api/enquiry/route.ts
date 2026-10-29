import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      businessName,
      contactMethod,
      email,
      phone,
      industry,
      serviceOfInterest,
      problemDescription,
      consent,
    } = body;

    // Strict validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!businessName || typeof businessName !== "string" || businessName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid business name." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "You must give consent to be contacted regarding your enquiry." },
        { status: 400 }
      );
    }

    // Contact details validation based on method
    if (contactMethod === "email" && (!email || !email.includes("@"))) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (contactMethod === "phone" && (!phone || phone.trim().length < 8)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number with area/country code." },
        { status: 400 }
      );
    }

    if (contactMethod === "both") {
      if (!email || !email.includes("@")) {
        return NextResponse.json(
          { error: "Please provide a valid email address." },
          { status: 400 }
        );
      }
      if (!phone || phone.trim().length < 8) {
        return NextResponse.json(
          { error: "Please provide a valid phone number." },
          { status: 400 }
        );
      }
    }

    // Check for production webhook or notification provider
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            fullName: fullName.trim(),
            businessName: businessName.trim(),
            contactMethod,
            email: email?.trim(),
            phone: phone?.trim(),
            industry,
            serviceOfInterest,
            problemDescription: problemDescription?.trim(),
          }),
        });

        if (!webhookResponse.ok) {
          console.error("Webhook notification failed with status:", webhookResponse.status);
          return NextResponse.json(
            { error: "Failed to dispatch enquiry to internal notification webhook." },
            { status: 502 }
          );
        }

        return NextResponse.json({
          success: true,
          mode: "production",
          message: "Thank you! Your enquiry has been received. Our team will review your details within 1 business day.",
        });
      } catch (webhookErr) {
        console.error("Error calling enquiry webhook:", webhookErr);
        return NextResponse.json(
          { error: "Internal error dispatching enquiry." },
          { status: 500 }
        );
      }
    }

    // Transparent development / demonstration fallback
    console.log("----------------------------------------");
    console.log("[DEV DEMO MODE] New Business Enquiry Received:");
    console.log({
      timestamp: new Date().toISOString(),
      fullName,
      businessName,
      contactMethod,
      email,
      phone,
      industry,
      serviceOfInterest,
      problemDescription,
    });
    console.log("----------------------------------------");

    return NextResponse.json({
      success: true,
      mode: "demo",
      message:
        "Enquiry verified successfully. [Demo Mode]: No production notification webhook (ENQUIRY_WEBHOOK_URL) is configured in environment. The submission was logged locally in server console.",
      enquiryData: {
        fullName: fullName.trim(),
        businessName: businessName.trim(),
        preferredContact: contactMethod === "phone" ? phone : email,
      },
    });
  } catch (err) {
    console.error("Error processing enquiry submission:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
