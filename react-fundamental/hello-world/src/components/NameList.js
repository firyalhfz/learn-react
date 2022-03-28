import React from "react";
import Person from "./Person";

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
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personList}</div>;
}

export default NameList;
