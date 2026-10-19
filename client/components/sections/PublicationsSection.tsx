import { publications } from "@/data/publications";

export default function PublicationsSection() {
  return (
    <section className="content-section" id="publications">
      <div className="section-heading">
        <p className="eyebrow">13 / PUBLICATIONS</p>
        <h2>Publications</h2>
      </div>

      {publications.length > 0 ? (
        <div className="content-grid">
          {publications.map((item) => (
            <article className="content-card" key={item.id}>
              <h3>{item.title}</h3>

              <p className="muted-text">
                {item.authors.join(", ")}
              </p>

              <p>
                {item.publication} · {item.year}
              </p>

              <p>{item.description}</p>

              {item.doi && (
                <p className="small-text">DOI: {item.doi}</p>
              )}

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Read publication ↗
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="muted-text">
          Publications will be listed here when available.
        </p>
      )}
    </section>
  );
}