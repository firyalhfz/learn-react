import React from "react";

function NameList() {
  const names = ["eren", "mikasa", "armin"];
  return (
    <div>
      {
        names.map(name => <h1 key={name}>{name}</h1>)
      }
    </div>
  );
}

export default NameList;
