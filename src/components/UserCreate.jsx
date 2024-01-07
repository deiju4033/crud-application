import React, { useState } from 'react'
import{Button, Form }from 'react-bootstrap'
import { addUser } from '../Redux/UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function UserCreate() {

    const users = useSelector((state)=>state.users)
const [name,setName]= useState("")
const [email,setEmail ]= useState("")
const [role,setRole]= useState("")
const dispatch=useDispatch()

const  navigate = useNavigate()
const handleSumbit = (e)=>{
  e.preventDefault()
   dispatch(addUser({id:users[users.length-1].id+1 , name , email ,role}))
   navigate('/')
}





  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center  ps-5  '   >
      <div className='w-100  border shadow rounded bg-info  text-white p-5  '  >
         <h3>Add Employee Details</h3>

      <Form onSubmit={handleSumbit} >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={e=>setName(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   onChange={e=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Select onChange={e=>setRole(e.target.value)}  >
          <option>Developer</option>
          <option>Tester</option>
        </Form.Select>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
        
        </div>  



    </div>
  )
}

export default UserCreate