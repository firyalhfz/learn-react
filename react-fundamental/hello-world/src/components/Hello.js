// JSX

import React from "react";

const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello Firyal</h1>
  //   </div>
  // );

  // tag name, attribute, children
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Firyal")
  );
};

export default Hello;
 