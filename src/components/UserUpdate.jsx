import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate, useParams } from 'react-router-dom'
import {  updateUser } from '../Redux/UserReducer'
import{Button, Form }from 'react-bootstrap'
function UserUpdate() {

    const {id} = useParams()
    const users = useSelector((state)=>state.users)
    const existingUser = users.filter(f=>f.id==id)
    const {name ,email,role} = existingUser[0]
    const [updateName,setUpdateName]= useState(name)
    const [updateEmail,setUpdateEmail]= useState(email)
    const [updateRole,setUpdateRole]= useState(role)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleUpdate = (e)=>{
        e.preventDefault()
        dispatch( updateUser({
            id:id,
            name:updateName,
            email: updateEmail,
            role:updateRole
        }))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center  ps-5  '   >
    <div className='w-100  border shadow rounded bg-info  text-white p-5  '  >
       <h3>Add Employee Details</h3>

    <Form onSubmit={handleUpdate} >
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" onChange={e=>setUpdateName(e.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"   onChange={e=>setUpdateEmail(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Role</Form.Label>
      <Form.Select onChange={e=>setUpdateRole(e.target.value)}  >
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

export default UserUpdate