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

      <div className="project-index">
        <div className="filter-row">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="skeleton skeleton-chip" />
          ))}
        </div>

        <div className="project-list">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="project">
              <div className="skeleton skeleton-media" />
              <div
                className="skeleton-stack"
                style={{ marginTop: "var(--space-md)" }}
              >
                <div className="skeleton skeleton-line" style={{ width: "40%" }} />
                <div className="skeleton skeleton-line" style={{ width: "90%" }} />
                <div className="skeleton skeleton-line" style={{ width: "70%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
