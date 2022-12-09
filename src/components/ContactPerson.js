import React from "react";

export default function ContactPerson({ name }) {
  return (
    <div>
      <button>+</button>
      <button className="nameBtn">{name}</button>
      <button>i</button>
    </div>
  );
}
