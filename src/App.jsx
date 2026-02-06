import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import './App.css'
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("notes")
        .select("*");

      if (!error) setNotes(data);
    }

    load();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>MyApp – DEV</h1>
      <p>React dev ✅</p>


      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
