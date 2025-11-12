import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export const NEW_DESIGN_HEADER = "x-new-design";

export async function middleware(request: NextRequest) {
  // Skip middleware if the new design header cookie is already set
  if (cookies().get(NEW_DESIGN_HEADER) !== undefined) {
    return NextResponse.next();
  }

  // Forward all incoming cookies to the internal API request
  const cookieHeader = request.headers.get("cookie") ?? "";

  // Call the internal API route that uses the Kameleoon SDK
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/new-design`,
    {
      headers: {
        cookie: cookieHeader,
      },
    }
  );
  // Extract the target value from the API response
  const { isNewDesign } = await res.json();

  // Prepare the response to continue to the page
  const response = NextResponse.next();

  // Set the NEW_DESIGN_HEADER cookie for the client
  response.cookies.set(NEW_DESIGN_HEADER, isNewDesign);

  // Forward all Set-Cookie headers from the API response to the client
  // (includes kameleoonVisitorCode and any other cookies set by the backend)
  res.headers
    .getSetCookie()
    ?.forEach((cookie) => response.headers.append("Set-Cookie", cookie));

  return response;
}

export const config = {
  matcher: ["/"], // apply middleware to the homepage
};
