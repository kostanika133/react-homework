import { fetch_data } from "./api/api";
import { useEffect, useState } from "react";
import Popup from "./postcard";
import Conformation from "./modal";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    async function load() {
      try {
        const info = await fetch_data();
        setData(info);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);
  function confirmDelete() {
    setData(data.filter((post) => post.id !== selectedId));
    setSelectedId(null);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  function handleDealite(id) {
    setData(data.filter((post) => post.id !== id));
  }

  return (
    <div>
      {data.map((post) => (
        <Popup key={post.id} post={post} onDealite={setSelectedId} />
      ))}
      {selectedId !== null && (
        <Conformation
          onConfirm={confirmDelete}
          onCancel={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;
