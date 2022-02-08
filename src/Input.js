import React, { useState } from "react";
import Icon from "@mui/material/Icon";

export default function Input(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
  }

  function handleClick(e) {
    props.onAdd(input);
    setInput("");
    e.preventDefault();
  }

  return (
    <div>
      <form className="form-data">
        <input onChange={handleChange} placeholder="To do..." value={input} />
        <span>
          <Icon sx={{ fontSize: 40 }} className="add" onClick={handleClick}>
            add_circle
          </Icon>
        </span>
      </form>
    </div>
  );
}
