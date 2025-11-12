import { NextResponse } from "next/server";
import { initClient } from "../kameleoon";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const client = await initClient();

  const visitorCode = client.getVisitorCode({ cookies });

  const isActive = client.isFeatureFlagActive({
    visitorCode,
    featureKey: "new_design", // Your feature key
  });

  const target = isActive ? "/newdesign" : "/olddesign";

  // Redirect *before* any rendering starts
  return NextResponse.redirect(new URL(target, request.url));
}
