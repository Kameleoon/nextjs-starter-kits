"use server";
import { KameleoonClient } from "@kameleoon/nodejs-sdk";
import { KameleoonEventSource } from "@kameleoon/nodejs-event-source";
import { KameleoonRequester } from "@kameleoon/nodejs-requester";
import { KameleoonVisitorCodeManager } from "@kameleoon/nextjs-visitor-code-manager";

// --- Kameleoon SDK credentials and site configuration ---
const SITE_CODE = "sitecode"; // Your Kameleoon site code
const CLIENT_ID = "client_id"; // SDK client ID
const CLIENT_SECRET = "client_secret"; // SDK client secret

// --- Singleton instance of the Kameleoon client ---
// We keep a single instance on the server to avoid creating multiple clients
let kameleoonClient: KameleoonClient | null = null;

/**
 * Initialize and return the persisted Kameleoon client instance.
 *
 * Guarantees:
 * 1. Only one KameleoonClient is created (singleton pattern)
 * 2. The client is fully initialized before use (lazy initialization)
 * 3. If initialization fails, it can be retried on the next call
 */
export async function initClient(): Promise<KameleoonClient> {
  // --- Step 1: Create the client if it doesn't exist yet ---
  if (!kameleoonClient) {
    kameleoonClient = new KameleoonClient({
      siteCode: SITE_CODE,
      configuration: {
        cookieDomain: "localhost", // Set the cookie domain for visitor tracking
      },
      credentials: {
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      },
      externals: {
        visitorCodeManager: new KameleoonVisitorCodeManager(), // Handles visitor ID management
        eventSource: new KameleoonEventSource(), // Required if using Streaming mode
        requester: new KameleoonRequester(), // Handles network requests to Kameleoon
      },
    });
  }

  // --- Step 2: Initialize the client if it hasn't been initialized ---
  // Ensures the SDK fetches necessary data from Kameleoon servers
  if (!kameleoonClient.isInitialized()) {
    await kameleoonClient.initialize();
  }

  // --- Step 3: Return the initialized client ---
  // After this, you can safely call SDK methods like `getVisitorCode` or `isFeatureFlagActive`
  return kameleoonClient;
}

// Ensures the Kameleoon client is initialized.
// This preloads SDK data (feature flags, targeting conditions, etc.) on server startup,
// so subsequent requests can use the already-initialized client without delay.
await initClient();
