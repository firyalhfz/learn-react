import React from 'react'

function Person({ person }) {
  return (
    <div>
      <h1>
        I am {person.name}, {person.age} years old and my skill is{' '}
        {person.skill}
      </h1>
    </div>
  )
}

export default Person
