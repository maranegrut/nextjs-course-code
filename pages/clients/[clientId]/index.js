import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  function loadProjectHandler() {
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "projecta" },
    });
  }
  return (
    <div>
      <h1>Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};
export default ClientProjectsPage;
