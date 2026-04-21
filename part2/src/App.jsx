/*
// part2 exercise 2.1
import { useState } from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

export default App
*/

/*
// part2 exercise 2.2 and 2.3
import Note from './components/Note'
import { useState } from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
<p>
  <strong>Number of exercises {total}</strong>
</p> 
  )
}

export default App
*/

/*
// part2 exercise 2.4 - nicht gemacht wie kann man den header ändern
import Note from './components/Note'
import { useState } from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

const Course = ({ course }) => {
  return (
    <div>
      <Headerh1 name={course.name} />
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Headerh1 = () => {
  return <h1>Web development curriculum</h1>
}

const Header = ({ name }) => {
  return <h2>{name}</h2>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
<p>
  <strong>Number of exercises {total}</strong>
</p> 
  )
}

export default App
*/

// part2 exercise 2.4

/*
import { useState } from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        { name: 'Fundamentals of React', exercises: 10, id: 1 },
        { name: 'Using props to pass data', exercises: 7, id: 2 },
        { name: 'State of a component', exercises: 14, id: 3 },
        { name: 'Redux', exercises: 11, id: 4 }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        { name: 'Routing', exercises: 3, id: 1 },
        { name: 'Middlewares', exercises: 7, id: 2 }
      ]
    }
  ]

  return (
    <div>
      <Headerh1 />

      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

const Headerh1 = () => {
  return <h1>Web development curriculum</h1>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><strong>Number of exercises {total}</strong></p>
}

export default App
*/

// part2 exercise 2.6
/*
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ //persons is the state variable that holds the array of person objects, and setPersons is the function used to update that state. The initial state is set to an array with one object that has a name property.
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    setPersons([...persons, { name: newName }]) //...means to copy the existing array and add a new object with the name property set to newName
    setNewName('') // Clear the input field after adding a person
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>person+number</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

*/






/*
// part2 exercise 2.7
import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([ //persons is the state variable that holds the array of person objects, and setPersons is the function used to update that state. The initial state is set to an array with one object that has a name property.
  ]) 
  const [newName, setNewName] = useState('')

const addPerson = (e) => {
  e.preventDefault()

  // Check if name already exists
  const exists = persons.some(
    (person) => person.name.toLowerCase() === newName.toLowerCase()
  )

  if (exists) {
    alert(`${newName} is already added to the phonebook`)
    return
  }

  // Add new person if not duplicate
  setPersons([...persons, { name: newName }])
  setNewName('')
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>person+number</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
*/
/*
//part2 exercise 2.8
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const exists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (exists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    setPersons([...persons, { name: newName, number: newNumber }])

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div>
          number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
*/


//part2 exercise 2.9
/*
import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const exists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (exists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    setPersons([...persons, { name: newName, number: newNumber }])

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div>
          number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
*/

// exercise 2.10
// Maintain the application's state and all event handlers in the App root component.
// Separate search filter, form to add new people, a component to render all people and a component to render a single person into separate components. Pass the necessary data and event handlers as props to the child components.

import { useState } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

