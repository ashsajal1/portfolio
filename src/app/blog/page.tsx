import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { blogPosts } from "@/lib/blogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text">
          Insights for Founders &amp; Business Owners
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Practical thinking on profitability, automation, and how the right software decisions grow your business.
        </p>
        <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col border border-secondaryLow/50 rounded-2xl p-6 bg-white/50 dark:bg-slate-900/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock />
                {post.readTime}
              </span>
            </div>

            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:gradient-text transition-all duration-200">
              {post.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-secondaryLow/50 dark:border-secondaryLow/20 bg-secondaryLow/10 dark:bg-secondary/10 px-3 py-0.5 text-xs font-medium text-secondary dark:text-secondaryLow"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary transition-all duration-200 hover:gap-3"
            >
              Read article
              <FiArrowRight />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
