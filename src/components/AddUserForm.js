import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddUserForm(props) {
    const {register, handleSubmit} = useForm();
  const onSubmit=(data, event)=>{
        props.addUser(data)
        event.target.reset();

  }
    return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input 
      type='text'
      {...register('fullName', {required:true})}
      placeholder='enter a name...'
      />
        
        <input 
      type='text'
      {...register('address', {required: true})}
      placeholder='enter a Address...'
      />
        <input       
      type='text'
      {...register('phoneNumber', {required: true})}
      placeholder='enter a Phone Number...'
      />
        <input 
      type='email'
      {...register('email',{required: true})}
      placeholder='enter a Email...'
      />
      <button type='submit'>Add</button>
      </form>
    </div>
  )
}
