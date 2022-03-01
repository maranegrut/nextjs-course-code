import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname); // /portfolio/[id]
  console.log(router.query); // {id: "something"} entered in url

  return (
    <div>
      <h1>Portfolio Project</h1>
    </div>
  );
};
export default PortfolioProjectPage;
