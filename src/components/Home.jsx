import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteUser} from '../Redux/UserReducer'

function Home() {

    const users = useSelector((state)=>state.users)
   const  dispatch = useDispatch()
   
   const handleDelete = (id)=>{

    dispatch(deleteUser({id:id}))
   }



    return (
        <div className='  border shadow rounded justify-content-center text-center align-items-center w-100 ms-5 p-5'   >
     <Link to={"/usercreate"} >    <button className='btn btn-success ' >Create New User </button></Link>

            <table className='table'  >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
               {  users.length>0?<tbody>
                  
                 {
                    users.map((user,index)=>(
                       <tr key={index}>
                          <td>{user.id} </td>
                          <td>{user.name} </td>
                          <td>{user.email}</td>
                          <td>{user.role}</td>
                          <td>
                          
            <Link  to={`/edit/${user.id}`}   >           <button className='btn btn-primary me-2' >Edit</button> </Link>
                          <button onClick={()=>handleDelete(user.id)}      className='btn btn-danger' >Delete</button>  

                          </td>



                       </tr>
                    ))}


                </tbody>: null

                    }

            </table>




        </div>
    )
}

export default Home