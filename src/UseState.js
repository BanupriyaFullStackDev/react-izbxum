import React, { useState } from "react";
export default function Hook() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const [name, setName] = useState("Banu");

  return (
    <>
      <h3>{count}</h3>
      <h3>{name}</h3>
      <button onClick={() => setCount(count + 1)}>IncCount</button>
      <button onClick={() => setCount(count - 1)}>DecCount</button>
      <button onClick={() => setCount(initialValue)}>REset</button>
      <button onClick={() => setName("Priya")}>ChangeName</button>
    </>
  );
}
