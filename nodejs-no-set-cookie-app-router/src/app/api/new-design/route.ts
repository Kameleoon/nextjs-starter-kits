import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { initClient } from "../../../kameleoon";

export async function GET() {
  const client = await initClient();

  const visitorCode = client.getVisitorCode({ cookies });

  const isActive = client.isFeatureFlagActive({
    visitorCode,
    featureKey: "bucketing_custom_data",
  });

  return NextResponse.json({ isNewDesign: isActive ? "true" : "false" });
}
