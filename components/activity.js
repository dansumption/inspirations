export default function Activity({ title, time, people, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Time: {time}</p>
      <p>People: {people}</p>
      <p>Description: {description}</p>
    </div>
  );
}
