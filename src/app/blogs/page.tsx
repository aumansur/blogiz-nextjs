"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";

const BlogPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery({});
  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto my-5">
      <h2 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-center text-xl text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
