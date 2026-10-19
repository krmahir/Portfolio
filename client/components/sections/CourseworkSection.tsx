import { coursework } from "@/data/coursework";

export default function CourseworkSection() {
  return (
    <section className="content-section" id="coursework">
      <div className="section-heading">
        <p className="eyebrow">08 / COURSEWORK</p>
        <h2>Coursework & Learning</h2>
      </div>

      {coursework.length > 0 ? (
        <div className="content-grid">
          {coursework.map((item) => (
            <article className="content-card" key={item.id}>
              <h3>{item.title}</h3>
              <p className="muted-text">{item.provider}</p>
              <p>{item.description}</p>

              <div className="tag-list">
                {item.topics.map((topic) => (
                  <span className="tag" key={topic}>
                    {topic}
                  </span>
                ))}
              </div>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  View resource ↗
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="muted-text">Coursework will be added soon.</p>
      )}
    </section>
  );
}