import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Klikov: ${count}`;
  }, [count]);

  return (
    <div className="app">
      <h1>React 79 – Lažji Dan 😄</h1>
      <p>
        Števec: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>Povečaj</button>
    </div>
  );
}
