import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Eren",
      age: 22,
      skill: "React",
    },
    {
      id: 2,
      name: "Mikasa",
      age: 20,
      skill: "IOS",
    },
    {
      id: 3,
      name: "Armin",
      age: 22,
      skill: "Kotlin",
    },
  ];
  const personList = persons.map((person) => (
    <h1>
      I am {person.name}, {person.age} years old and my skill is {person.skill}
    </h1>
  ));
  return <div>{personList}</div>;
}

export default NameList;
