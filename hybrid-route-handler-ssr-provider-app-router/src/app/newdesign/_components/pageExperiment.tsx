"use client";
import {
  useFeatureFlag,
  useInitialize,
  useVisitorCode,
} from "@kameleoon/react-sdk";
import { useCallback, useEffect, useState } from "react";
import PageA from "./pageA";
import PageB from "./pageB";

export default function PageExperiment() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { isFeatureFlagActive } = useFeatureFlag();

  const [newDesignType, setNewDesignType] = useState<boolean | undefined>(
    undefined
  );

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    const visitorCode = getVisitorCode();

    const isNewDesign = isFeatureFlagActive({
      visitorCode,
      featureKey: "new_design_type", // Your feature key for React SDK
    });

    setNewDesignType(isNewDesign);
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);

  if (newDesignType === undefined) {
    return <div />;
  }

  return newDesignType ? <PageA /> : <PageB />;
}
