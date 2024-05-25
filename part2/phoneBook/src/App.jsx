import { useState } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import Show from './components/Show'

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
      <Filter filter={filter} handleFilterChange={handleFilterChange}></Filter>
      <AddPersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}></AddPersonForm>
      <h2>Numbers</h2>
      {persons.filter(person=>{
        if(filter===''){
          return true;
        }
        return person.name===filter
      }).map(person=><Show key = {person.id} name={person.name} number={person.number}></Show>)}
    </div>
  )
}

export default App