export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <header className="section-heading">
      <span className="tag">
        <span className="dot" aria-hidden="true" />
        {tag}
      </span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
