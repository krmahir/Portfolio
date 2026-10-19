"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({
  text
}: CopyButtonProps) {
  const { copy, copied } = useCopyToClipboard();
  const [error, setError] = useState(false);

  async function handleCopy() {
    const success = await copy(text);
    setError(!success);
  }

  return (
    <button
      type="button"
      className="button button-secondary"
      onClick={handleCopy}
      aria-label="Copy text to clipboard"
    >
      {copied ? (
        <>
          <Check size={16} />
          Copied
        </>
      ) : (
        <>
          <Copy size={16} />
          {error ? "Copy failed" : "Copy"}
        </>
      )}
    </button>
  );
}