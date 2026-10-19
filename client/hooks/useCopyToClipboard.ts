"use client";

import { useState } from "react";

export default function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);

      return true;
    } catch (error) {
      console.error("Failed to copy text:", error);
      setCopied(false);

      return false;
    }
  };

  return {
    copied,
    copy,
  };
}