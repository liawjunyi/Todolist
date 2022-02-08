import React, { useState } from "react";
import Input from "./Input";
import List from "./list";

export default function App() {
  const [items, setItem] = useState([]);

  function handleClick(input) {
    setItem((prev) => {
      return [...prev, input];
    });
  }

  function deleteItem(id) {
    setItem(() => {
      return items.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Input onAdd={handleClick} />
      {items.map((item, index) => {
        return (
          <List key={index} id={index} todo={item} onDelete={deleteItem} />
        );
      })}
    </div>
  );
}
