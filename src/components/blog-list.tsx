"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
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
    <section className="blog-index" aria-label="Articles">
      <h2 className="index-title">All notes</h2>

      <div className="blog-tools">
        <div className="search-field">
          <FiSearch aria-hidden="true" />
          <label htmlFor="blog-search" className="visually-hidden">
            Search articles
          </label>
          <input
            id="blog-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="field-input"
          />
        </div>

        <div className="field">
          <label htmlFor="blog-category" className="visually-hidden">
            Filter by category
          </label>
          <select
            id="blog-category"
            value={activeTag ?? ""}
            onChange={(e) => setActiveTag(e.target.value || null)}
            className="field-input"
          >
            <option value="">All categories</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="post-empty">No articles match your search.</p>
      ) : (
        <div className="post-list">
          {filtered.map((post) => (
            <article key={post.slug} className="post-row">
              <div className="post-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="post-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
