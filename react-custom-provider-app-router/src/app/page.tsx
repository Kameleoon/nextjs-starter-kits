import PageExperiment from "./_components/pageExperiment";
import Provider from "./_providers/provider";

export default function PageHome() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4ff",
        padding: "10rem",
        borderRadius: "12px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#333",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Server-Side Rendered Area
      </h1>
      <Provider>
        <PageExperiment />
      </Provider>
    </div>
  );
}
