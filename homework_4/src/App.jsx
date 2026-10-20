import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  async function handleSearch() {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${country}`,
    );
    const data = await response.json();
    setUniversities(data);
    setPage("list");
  }

  if (page === "home") {
    return (
      <div className="page">
        <h1>Universities</h1>
        <p>
          This is the universities page. Find information about a university.
        </p>
        <input
          type="text"
          placeholder="Enter a country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  }

  if (page === "list") {
    return (
      <div className="page">
        <button type="button" onClick={() => setPage("home")}>
          Back to home
        </button>
        <h2>Universities in {country}</h2>
        <div className="university-list">
          {universities.map((university, index) => (
            <div key={index} className="university-card">
              <div>
                <h3>{university.name}</h3>
                <p>{university.country}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedUniversity(university);
                  setPage("detail");
                }}
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <button type="button" onClick={() => setPage("list")}>
        Back to list
      </button>
      <h2>{selectedUniversity.name}</h2>
      <p>Country: {selectedUniversity.country}</p>
      <p>
        website:{" "}
        <a
          href={selectedUniversity.web_pages[0]}
          target="_blank"
          rel="noreferrer"
        >
          {selectedUniversity.web_pages[0]}
        </a>
      </p>
      <p>Domains: {selectedUniversity.domains.join(", ")}</p>
    </div>
  );
}

export default App;
