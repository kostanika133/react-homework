import { useLocation } from "react-router-dom";

function University() {
  const location = useLocation();
  const university = location.state?.university;
  if (!university) return <p>No university data</p>;
  return (
    <div className="detail">
      <h1>{university.name}</h1>
      <p>{university.country}</p>
      <p>{university["state-province"]}</p>
      {university.web_pages.map((w) => (
        <p key={w}>{w}</p>
      ))}
    </div>
  );
}

export default University;
