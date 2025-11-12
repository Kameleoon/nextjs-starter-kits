import PageOldDesign from "./_components/pageOldDesign";
import PageNewDesign from "./_components/pageNewDesign";
import { cookies } from "next/headers";
import { NEW_DESIGN_HEADER } from "../middleware";

export default async function PageHome() {
  const newDesign = cookies().get(NEW_DESIGN_HEADER)?.value == "true";
  return newDesign ? <PageNewDesign /> : <PageOldDesign />;
}
