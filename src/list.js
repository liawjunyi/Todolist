import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function List(props) {
  const [check, setChecked] = useState(false);
  function deleteItem() {
    props.onDelete(props.id);
  }

  function checkItem() {
    setChecked(!check);
  }
  return (
    <div className="list">
      <h1 style={{ textDecoration: check ? "line-through" : "none" }}>
        {props.todo}
        <span>
          <Checkbox onClick={checkItem} />
        </span>
        <span>
          <IconButton aria-label="delete" onClick={deleteItem}>
            <DeleteIcon />
          </IconButton>
        </span>
      </h1>
    </div>
  );
}
