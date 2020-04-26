export default function Activity({ title, time, people, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h4>Time: {time}</h4>
      <h4>People: {people}</h4>
      <p>{content}</p>
    </div>
  );
}
