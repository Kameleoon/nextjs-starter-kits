import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { initClient } from "../kameleoon";
import PageNewDesign from "../components/pageNewDesign";
import PageOldDesign from "../components/pageOldDesign";

interface PageHomeProps {
  newDesign: boolean;
}

export const getServerSideProps: GetServerSideProps<PageHomeProps> = async (
  context: GetServerSidePropsContext
) => {
  // Access req/res via context
  const { req, res } = context;

  const client = await initClient();

  const visitorCode = client.getVisitorCode({ request: req, response: res });

  const isActive = client.isFeatureFlagActive({
    visitorCode,
    featureKey: "new_design", // Your feature key
  });

  return {
    props: {
      newDesign: isActive,
    },
  };
};

export default function PageHome({ newDesign }: PageHomeProps) {
  return newDesign ? <PageNewDesign /> : <PageOldDesign />;
}
