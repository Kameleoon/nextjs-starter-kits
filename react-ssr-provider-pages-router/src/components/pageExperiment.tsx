import {
  useFeatureFlag,
  useInitialize,
  useVisitorCode,
} from "@kameleoon/react-sdk";
import { useCallback, useEffect, useState } from "react";
import PageNewDesign from "./pageNewDesign";
import PageOldDesign from "./pageOldDesign";

export default function PageExperiment() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { isFeatureFlagActive } = useFeatureFlag();

  const [newDesign, setNewDesign] = useState<boolean | undefined>(undefined);

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    const visitorCode = getVisitorCode();

    const isNewDesign = isFeatureFlagActive({
      visitorCode,
      featureKey: "new_design", // Your feature key
    });

    setNewDesign(isNewDesign);
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);

  if (newDesign === undefined) {
    return <div />;
  }

  return newDesign ? <PageNewDesign /> : <PageOldDesign />;
}
