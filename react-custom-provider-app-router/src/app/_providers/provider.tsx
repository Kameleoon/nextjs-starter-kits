import { KameleoonProvider } from "@kameleoon/react-sdk";
import { client } from "./kameleoon";

const Provider = ({ children }) => {
  return <KameleoonProvider client={client}>{children}</KameleoonProvider>;
};

export default Provider;
