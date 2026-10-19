import { volunteering } from "@/data/volunteering";

export default function VolunteeringSection() {
  return (
    <section className="content-section" id="volunteering">
      <div className="section-heading">
        <p className="eyebrow">12 / COMMUNITY</p>
        <h2>Volunteering</h2>
      </div>

      {volunteering.length > 0 ? (
        <div className="content-grid">
          {volunteering.map((item) => (
            <article className="content-card" key={item.id}>
              <h3>{item.role}</h3>
              <p className="muted-text">{item.organization}</p>
              <p>{item.description}</p>
              <p className="small-text">
                {item.startDate} — {item.endDate}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <p className="muted-text">
          Volunteering experience will be added soon.
        </p>
      )}
    </section>
  );
}