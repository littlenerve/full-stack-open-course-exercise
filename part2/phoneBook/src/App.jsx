import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if(persons.some(person=>person.name===newName)){
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><Person name={person.name}></Person>)}
    </div>
  )
}

const Person=({name}) =>{
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default App