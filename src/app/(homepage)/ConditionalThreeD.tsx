"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import ThreeD from "./ThreeD"; // Assuming ThreeD is in the same directory

export default function ConditionalThreeD() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) {
    return null;
  }

  return <ThreeD />;
} 