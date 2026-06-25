import { useEffect, useState } from 'react'
import contactsServer from './services/contacts'
import './index.css'

//Componentes
const SubHeader = (props) => <h2>{props.subtitle}</h2>

const DeleteButton = ({handleDelete, id, name}) => <button onClick={()=> handleDelete(id,name)}>delete</button>

const Person = (props) => <li>{props.name}: {props.number}</li>

const Filter = ({value, onChange }) => <p>filter show with <input value={value} onChange={onChange}/> </p>


const AddPersonForm = ({findName, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return(
  <form onSubmit={findName}>
    <div>
      name: <input value ={newName} onChange = {handleNameChange}/>
      number: <input value={newNumber} onChange={handleNumberChange}/>
      <button type="submit">add</button>
    </div>
  </form>)
}

const Notification = ({message}) => {
  if (message === null){
    return null
  }
  return(
    <div className='succesfulMessage'>
      {message}
    </div>
  )
}

const App = () => {
  //ESTADOS
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [succesfulMessage, setSuccesfulMessage] = useState(null)

  //Se obtiene de mi archivo contacts la bd y se muestra en la pantalla
  useEffect(() =>{
    contactsServer.getAll().then((initialContacts) =>{
      setPersons(initialContacts)
    })
  }, [])


  //FUNCIONES

  //Se agrega una persona nueva 
  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    }
    contactsServer.createPerson(personObject).then(returnedPerson =>{
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setSuccesfulMessage(`Added ${newName}`)
      setTimeout(() => {
        setSuccesfulMessage(null)
      }, 5000)
    })
  }

  const updateNumber = (person) => {
    const newPerson = {...person, number: newNumber}
    contactsServer.updatePerson(person.id, newPerson).then(returnedPerson => {
      setPersons(persons.map(p => p.id === person.id ? returnedPerson: p))
      setSuccesfulMessage(`Number changed to ${newNumber}`)
      setTimeout(() => {
        setSuccesfulMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    }).catch(error => {
      setSuccesfulMessage(`Information of ${person.name} has already been removed from server`)
      setTimeout(() => {
        setSuccesfulMessage(null)
      }, 5000)
      setPersons(persons.filter(p => p.id !== person.id))
      setNewName('')
      setNewNumber('')
    })
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterNameChange = (event) => setFilterName(event.target.value)

  const handleDelete = (id, name) => {
    if (window.confirm(`Quieres borrar a ${name}`)){
      contactsServer.deleteContact(id)
      .then(() => setPersons(
        persons.filter(person => person.id !== id)))
      setSuccesfulMessage(`${name} was deleted`)
      setTimeout(() => {
        setSuccesfulMessage(null)
      }, 5000)
    }
  }

  const findName = (event) => {
    event.preventDefault()
    const nameExist =persons.find(person => person.name.toLowerCase() === newName.toLocaleLowerCase()) 
    if (nameExist){
      if(window.confirm(`Quieres cambiar el numero de ${newName} a ${newNumber}`)){
        updateNumber(nameExist)
      }
      return
    }
    addPerson()
  }

  const personsToShow = filterName === '' ? persons : persons.filter(person => 
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  //Return
  return (
    <div>
      <SubHeader subtitle = 'Phonebook'/>
      <Notification message={succesfulMessage}/>
      <Filter filterName = {filterName} onChange = {handleFilterNameChange}/>
      <SubHeader subtitle = 'Add a new Person'/>
      <AddPersonForm 
      findName = {findName} newName = {newName} 
      handleNameChange = {handleNameChange} newNumber = {newNumber}
      handleNumberChange = {handleNumberChange}/>
      <SubHeader subtitle='Numbers'/>
        {personsToShow.map(person => 
        <div key={person.id}>
          <Person id={person.id} name = {person.name} number = {person.number}/>
          <DeleteButton handleDelete ={handleDelete} id ={person.id} name = {person.name} />
        </div>
        )}
    </div>
  )
}

export default App