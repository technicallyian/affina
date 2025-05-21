"use client";

import { useEffect, useState } from "react";

export function BreakpointIndicator() {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const calculateBreakpoint = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setBreakpoint("xs");
        } else if (width < 768) {
          setBreakpoint("sm");
        } else if (width < 1024) {
          setBreakpoint("md");
        } else if (width < 1280) {
          setBreakpoint("lg");
        } else if (width < 1536) {
          setBreakpoint("xl");
        } else if (width < 1792) {
          setBreakpoint("2xl");
        } else {
          setBreakpoint("3xl");
        }
      };

      calculateBreakpoint();
      window.addEventListener("resize", calculateBreakpoint);
      return () => window.removeEventListener("resize", calculateBreakpoint);
    }
  }, []);

  if (process.env.NODE_ENV !== "development" || !breakpoint) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        padding: "0.5rem 1rem",
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        borderRadius: "0.25rem",
        fontSize: "0.875rem",
        zIndex: 9999,
      }}
    >
      {breakpoint.toUpperCase()}
    </div>
  );
} 