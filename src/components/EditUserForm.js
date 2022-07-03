import React from 'react'

export default function EditUserForm() {
  return (
   
      <tr>
        <td>
            <input 
            type='text'
            name="fullName"
            />
        </td>
        <td>
            <input 
            type='text'
            name="address"
            />
        </td>
        <td>
            <input 
            type='text'
            name="phoneNumber"
            />
        </td>
        <td>
            <input 
            type='text'
            name="email"
            />
        </td>
        </tr>
  )
}
