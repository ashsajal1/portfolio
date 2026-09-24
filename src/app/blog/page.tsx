import type { Metadata } from "next";
import { FiRss } from "react-icons/fi";
import { blogPosts } from "@/lib/blogPosts";
import BlogList from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical essays on profitability, automation and software decisions that help founders grow their business.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold gradient-text">
          Insights for Founders &amp; Business Owners
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Practical thinking on profitability, automation, and how the right software decisions grow your business.
        </p>
        <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />

        <div className="mt-4 flex justify-center">
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary transition-all duration-200 hover:gap-3"
          >
            <FiRss aria-hidden="true" />
            Subscribe via RSS
          </a>
        </div>
      </div>

      <BlogList posts={blogPosts} />
    </div>
  );
}
