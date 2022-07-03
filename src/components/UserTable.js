import React from 'react'

export default function UserTable({contact, handleEditClick}) {
  return (
    <tr key={contact.id}>
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    <td><button onClick={(event)=>handleEditClick(event, contact)}>Edit</button></td>
</tr>
  )
}
