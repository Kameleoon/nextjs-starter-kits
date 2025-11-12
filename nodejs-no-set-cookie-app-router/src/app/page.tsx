import { initClient } from "../kameleoon";
import {
  CookieParameters,
  RequestCookie,
} from "@kameleoon/nodejs-sdk/dist/types";
import { cookies } from "next/headers";
import PageNewDesign from "./_components/pageNewDesign";
import PageOldDesign from "./_components/pageOldDesign";

function getKameleoonCookie(): RequestCookie {
  return {
    get: (key: string) => {
      const value = cookies().get(key)?.value;
      return value ? { value } : undefined;
    },
    set: (key: string, value: string, parameters: CookieParameters) => {
      // Setting cookies is not allowable because it runs not in Router handler or Server actions
    },
  };
}

async function getNewDesign() {
  const client = await initClient();

  const visitorCode = client.getVisitorCode({ cookies: getKameleoonCookie });

  const isActive = client.isFeatureFlagActive({
    visitorCode,
    featureKey: "new_design", // Your feature key
  });

  return isActive;
}

export default async function PageHome() {
  const newDesign = await getNewDesign();

  return newDesign ? <PageNewDesign /> : <PageOldDesign />;
}
