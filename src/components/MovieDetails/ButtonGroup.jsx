import React from "react";
import AddButton from "../Buttons/AddButton";
import TrailerButton from "../Buttons/TrailerButton";

function ButtonGroup() {
  return (
    <div style={{ display: "flex" }}>
      <TrailerButton />
      <AddButton />
    </div>
  );
}

export default ButtonGroup;
