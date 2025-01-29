import React from "react";

const click = () => {
  alert("VOCÊ FOI CRIADO! UAU!");
};

export default function Component_Create() {
  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          color: "black",
          backgroundColor: "green",
        }}
        onClick={click}
      >
        criar
      </button>
    </div>
  );
}
