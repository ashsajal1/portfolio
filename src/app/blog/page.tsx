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
    <div className="shell page-wrap">
      <header className="page-head">
        <div className="page-head-grid">
          <h1 className="page-title">Notes on building for profit</h1>
          <div className="page-lede">
            <p>Essays on software decisions that move revenue.</p>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <FiRss aria-hidden="true" />
              Subscribe via RSS
            </a>
          </div>
        </div>
      </header>

      <BlogList posts={blogPosts} />
    </div>
  );
}
