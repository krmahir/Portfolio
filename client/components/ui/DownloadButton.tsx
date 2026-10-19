import { Download } from "lucide-react";

interface DownloadButtonProps {
  href: string;
  label?: string;
  filename?: string;
}

export default function DownloadButton({
  href,
  label = "Download Resume",
  filename
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      download={filename}
      className="button button-primary"
    >
      <Download size={16} />
      {label}
    </a>
  );
}