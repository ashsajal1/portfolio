import React from "react";

export default function Loading() {
  return (
    <div className="shell page-wrap">
      <div className="page-head">
        <div className="page-head-grid">
          <div className="skeleton skeleton-title" />
          <div className="skeleton-stack page-lede">
            <div className="skeleton skeleton-line" style={{ width: "100%" }} />
            <div className="skeleton skeleton-line" style={{ width: "80%" }} />
          </div>
        </div>
      </div>

      <div className="blog-index">
        <div className="blog-tools">
          <div className="skeleton" style={{ height: 48 }} />
          <div className="skeleton" style={{ height: 48 }} />
        </div>

        <div className="post-list">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton-row">
              <div className="skeleton-stack">
                <div className="skeleton skeleton-line" style={{ width: "70%" }} />
                <div className="skeleton skeleton-line" style={{ width: "50%" }} />
              </div>
              <div className="skeleton-stack">
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-line" style={{ width: "100%" }} />
                <div className="skeleton skeleton-line" style={{ width: "85%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
