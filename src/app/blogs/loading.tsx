import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/types";
import React from "react";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center text-red-500">Loading....</h1>
      <div className="grid grid-cols-3 gap4">
        {blogs.map((blog: Blog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
