import axios from 'axios'

//Url del servidor que tiene mi bd
const baseUrl = 'http://localhost:3001/persons'

// Sirve para obtener todos los datos de mi bd
const getAll = () => axios.get(baseUrl).then(response => response.data)

const deleteContact = (id) => axios.delete(`${baseUrl}/${id}`).then(response => response.data)

const createPerson = (newPersonObjectc) =>  axios.post(baseUrl, newPersonObjectc).then(response => response.data)

const updatePerson = (id, personChanged) => {
    return axios
    .put(`${baseUrl}/${id}`, personChanged)
    .then(response => response.data)
}

export default {getAll, deleteContact, createPerson, updatePerson}