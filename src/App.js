import './App.css';
import dataJson from "./mock-data.json"
import {nanoid} from "nanoid"
import React, { useState, Fragment } from 'react'
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import EditUserForm from './components/EditUserForm';

export default function App(props) {
  const [contacts, setContacts] = useState(dataJson);
  

  //Add user
const addUser = (user) =>{
  user.id = nanoid();
  setContacts([
    ...contacts,
    user
  ])
}
//edit section 
const [editContactId, setEditContactId] = useState(null);
const handleEditClick =(event, contact)=>{
  event.preventDefault();
  setEditContactId(contact.id)
}


  return (
    <div className='app-container'>
      <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
       {contacts.map(contact=>(
        <Fragment>
          {editContactId === contact.id ? (<EditUserForm />):(
            <UserTable contact={contact} handleEditClick={handleEditClick} />
          )}
        </Fragment>
       
       ))}
        </tbody>
      </table>
      </form>
      <h2>Add Row</h2>
      <AddUserForm addUser={addUser}/>
    </div>
  )
}

