import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <ShieldAlert
          size={48}
          className="accent"
        />

        <p className="eyebrow">ERROR 404</p>

        <h1>Page Not Found</h1>

        <p className="muted">
          The page you are looking for does not exist
          or may have been moved.
        </p>

        <Link
          href="/"
          className="button button-primary"
        >
          <ArrowLeft size={16} />
          Return Home
        </Link>
      </div>
    </main>
  );
}