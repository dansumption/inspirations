export default function Activity({title, time, people, description}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Time: {time}</p>
      <p>People: {people}</p>
      <p>Description: {description}</p>
    </div>
  );
}
