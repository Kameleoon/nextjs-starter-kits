"use client";

import {
  createClient,
  IExternalVisitorCodeManager,
  KameleoonUtils,
  SetDataParametersType,
} from "@kameleoon/react-sdk";

const SITE_CODE = "sitecode"; // Your Kameleoon site code

// --- External Visitor Code Manager implementation ---
// This example uses browser cookies for storing the visitor code.
class CustomerVisitorCodeManager implements IExternalVisitorCodeManager {
  public getData(key: string): string | null {
    const cookieString = document.cookie;

    // Return `null` if no cookies are present
    if (!cookieString) {
      return null;
    }

    // Parse cookie value using SDK utility
    return KameleoonUtils.getCookieValue(cookieString, key);
  }

  public setData({
    visitorCode,
    domain,
    maxAge,
    key,
    path,
  }: SetDataParametersType): void {
    // Build cookie string using provided parameters
    let cookie = `${key}=${visitorCode}; Max-Age=${maxAge}; Path=${path}`;

    if (domain) {
      cookie += `; Domain=${domain}`;
    }

    document.cookie = cookie;
  }
}

// Detects whether code executes on the server (Node.js)
// Any other SSR detection mechanism may be used.
const isServer = typeof window === "undefined";

export const client = createClient({
  siteCode: SITE_CODE,
  externals: {
    visitorCodeManager: new CustomerVisitorCodeManager(), // Custom VisitorCodeManager using browser cookies
  },
  // Enable stubMode on the server to prevent creating a real KameleoonSDK instance during SSR.
  // In the browser, stubMode=false (real SDK instance).
  stubMode: isServer,
});
