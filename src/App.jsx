import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("notes")
        .select("*");

      if (error) {
        console.error(error);
        return;
      }

      // ⚠️ BUG: assumes at least one note exists
      setNotes(data.slice(0, data.length - 1));
    }

    load();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>MyApp</h1>
      <p>Notes loaded ✅</p>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
