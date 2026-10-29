import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  return (
    <div className="main_info">
      <h1 className="info_h1">this is university site</h1>
      <input
        onChange={(e) => setCountry(e.target.value)}
        value={country}
        type="text"
        className="input_university"
      />
      <button
        className="submit_but"
        onClick={() => navigate("/universities/" + country)}
      >
        search
      </button>
    </div>
  );
}

export default Home;
