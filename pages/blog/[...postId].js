import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  // an array of the things between / /s
  // ex: {id: ["2020", "12"]}
  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
};
