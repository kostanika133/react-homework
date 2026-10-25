import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Universities() {
  const { country } = useParams();
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function fetch_uni() {
    try {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + country,
      );
      const data = await response.json();
      setUniversities(data);
      setLoading(false);
    } catch {
      setError("something went wrong");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetch_uni();
  }, [country]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="list">
      {universities.map((u) => (
        <div className="list_item" key={u.name}>
          <p>{u.name}</p>
          <button
            onClick={() =>
              navigate("/universities/" + country + "/" + u.name, {
                state: {
                  university: u,
                },
              })
            }
          >
            Detail
          </button>
        </div>
      ))}
    </div>
  );
}
export default Universities;
