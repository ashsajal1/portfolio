"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar, FiSearch } from "react-icons/fi";
import type { BlogPost } from "@/lib/blogPosts";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [posts, query, activeTag]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <FiSearch aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <input
            id="blog-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white dark:bg-slate-800 pl-9 pr-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
          />
        </div>
        <label htmlFor="blog-category" className="sr-only">
          Filter by category
        </label>
        <select
          id="blog-category"
          value={activeTag ?? ""}
          onChange={(e) => setActiveTag(e.target.value || null)}
          className="rounded-lg border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
        >
          <option value="">All categories</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400 py-12">
          No articles match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col border border-secondaryLow/50 rounded-2xl p-6 bg-white/50 dark:bg-slate-900/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar aria-hidden="true" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FiClock aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:gradient-text transition-all duration-200">
                {post.title}
              </h2>
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
                <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
