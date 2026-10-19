import { training } from "@/data/training";

export default function ProfessionalTrainingSection() {
  return (
    <section className="content-section" id="training">
      <div className="section-heading">
        <p className="eyebrow">10 / TRAINING</p>
        <h2>Professional Training</h2>
      </div>

      {training.length > 0 ? (
        <div className="content-grid">
          {training.map((item) => (
            <article className="content-card" key={item.id}>
              <h3>{item.title}</h3>
              <p className="muted-text">{item.provider}</p>
              <p>{item.description}</p>
              <p className="small-text">{item.date}</p>

              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  View details ↗
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="muted-text">
          Professional training details will be added soon.
        </p>
      )}
    </section>
  );
}