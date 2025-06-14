import React from "react";
import Translator from "./Translator";
import VocabList from "./VocabList";

function App() {
  const handleSave = (text, translated, from, to) => {
    const data = JSON.parse(localStorage.getItem("vocab") || "[]");
    data.push({ text, translated, from, to });
    localStorage.setItem("vocab", JSON.stringify(data));
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>
      <h2>Ứng dụng Dịch thuật & Lưu trữ Từ vựng</h2>
      <Translator onSave={handleSave} />
      <hr />
      <VocabList />
    </div>
  );
}

export default App;
