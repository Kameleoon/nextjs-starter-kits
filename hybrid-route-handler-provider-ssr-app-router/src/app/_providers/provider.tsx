import { KameleoonProviderSSR } from "@kameleoon/react-sdk";

const SITE_CODE = "sitecode"; // Your Kameleoon site code for React SDK

const Provider = ({ children }) => {
  const sdkParams = { siteCode: SITE_CODE };
  return (
    <KameleoonProviderSSR sdkParameters={sdkParams}>
      {children}
    </KameleoonProviderSSR>
  );
};

export default Provider;
