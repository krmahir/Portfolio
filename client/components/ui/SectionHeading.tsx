interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${
        centered ? "section-heading-centered" : ""
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2 className="heading">{title}</h2>

      {description && (
        <p className="muted">{description}</p>
      )}
    </div>
  );
}