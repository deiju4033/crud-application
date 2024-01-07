import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
  
  const userSlice = createSlice({
      name:"user",
      initialState: userList,
       reducers:{
            
          addUser:(state,action)=>{
           state.push(action.payload)
          },
          updateUser: (state , action)=>{
            const { id , name , email,role} = action.payload
            const updateUser = state.find(user=>user.id == id)
            if(updateUser){
               updateUser.name = name;
               updateUser.email = email;
               updateUser.role = role
            }
           },
           deleteUser : (state , action) =>{
               const { id } = action.payload
               const updateUser = state.find(user=>user.id == id)
               if (updateUser) {
                   return state.filter(f=>f.id !== id)
               }
           }


           



       }

  })

  export const {addUser,updateUser,deleteUser} = userSlice.actions
  export  default userSlice.reducer