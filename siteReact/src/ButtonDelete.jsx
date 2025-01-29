import React from "react";

const click = () => {
  alert("VOCÊ FOI DELETADO! HAHAHA");
};

export default function Component_Delete() {
  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          color: "black",
          backgroundColor: "red",
        }}
        onClick={click}
      >
        deletar
      </button>
    </div>
  );
}
