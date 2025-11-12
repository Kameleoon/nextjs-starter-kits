"use client";
import PageOldDesign from "./_components/pageOldDesign";
import PageNewDesign from "./_components/pageNewDesign";
import { getNewDesign } from "./actions/getNewDesign";
import { useEffect, useState } from "react";

export default function PageHome() {
  const [newDesign, setNewDesign] = useState<boolean | null>(null);

  useEffect(() => {
    getNewDesign().then(setNewDesign);
  }, []);

  if (newDesign === null) return <div></div>;

  return newDesign ? <PageNewDesign /> : <PageOldDesign />;
}
