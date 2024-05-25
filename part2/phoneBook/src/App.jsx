import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')
  const [newNumber, setnewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if(persons.some(person=>person.name===newName)){
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      id:persons.length+1,
      name: newName,
      number:newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setnewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setnewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>
          filter shown with <input value={filter} onChange={handleFilterChange}/>
        </p>
      </div>
      <form onSubmit={addName}>
        <h1>add a new</h1>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person=>{
        if(filter===''){
          return true;
        }
        return person.name===filter
      }).map(person=><Person key = {person.id} name={person.name} number={person.number}></Person>)}
    </div>
  )
}

const Person=({name,number}) =>{
  return (
    <div>
      <p>{name} {number}</p>
    </div>
  )
}

export default App