import { createSlice } from "@reduxjs/toolkit";


const UserSlice=createSlice({
    name: 'UserStore',
    initialState: {
      value: [
        {
            id:234,
            first_name:"Moorthi",
            last_name:"Moorthi",
            country_code:'+91',
            email:"ak@gmail.com",
            mobile:'3456788764',
            address_1:'2/2,Hosur',
            address_2:'',
            state:'Tamil Nadu',
            city:'Hosur',
            country:'India',
            zip_code:635117
        }
        
      ],
    },
    reducers:{

      //creating New User Reducer
        AddUserReducer:(state,action)=>{
          //Generate User ID
          var UserId = Math.random().toString(8).slice(17)
          const UserDetails={
            id:UserId,
            ...action.payload
          }
          state.value.push(UserDetails)
          alert('created Successfully')
        },

        // Updating User Data Reducer
        UpdateUserReducer:(state,action)=>{
          //finding Index
          const IndexID=state.value.findIndex((data)=>data.id==action.payload.id)
          state.value[IndexID]={
            id:action.payload.id,
            ...action.payload.data
          }
          alert("Updated Successfully")
          
        },
        
        //Delete the User
        DeleteUser:(state,action)=>{
          //finding Index
          const IndexID=state.value.findIndex((data)=>data.id==action.payload)
          state.value.splice(IndexID,1)
          alert("User deleted!")
          
        }
    }
})
export const { AddUserReducer, UpdateUserReducer, DeleteUser } = UserSlice.actions

export default UserSlice.reducer