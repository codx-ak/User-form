import { createSlice } from "@reduxjs/toolkit";


const UserSlice=createSlice({
    name: 'UserStore',
    initialState: {
      value: [
        {
            id:1,
            first_name:"ak",
            last_name:"Moorthi",
            email:"ak@gmail.com",
            mobile:'3456788764',
            address_1:'2/2,Hosur',
            address_2:'3/3,shoolgiri',
            state:'Tamilnadu',
            city:'Hosur',
            country:'India',
            zip_code:635117
        },
        {
            id:2,
            first_name:"ak",
            last_name:"Moorthi",
            email:"ak@gmail.com",
            mobile:'3456788764',
            address_1:'2/2,Hosur',
            address_2:'3/3,shoolgiri',
            state:'Tamilnadu',
            city:'Hosur',
            country:'India',
            zip_code:635117
        }
      ],
    },
    reducers:{
        createUser:(state,action)=>{
          state.value.push(action.payload)
          alert('created')
        },
        UpdateUser:()=>{},
        
        DeleteUser:(state,action)=>{
          let UserID=null
          state.value.find((user,index)=>{
            if(user.id===action.payload){
              UserID=index 
            }
          return ''})
            state.value.splice(UserID,1)
          alert("deleted")
          
        }
    }
})
export const { createUser, UpdateUser, DeleteUser } = UserSlice.actions

export default UserSlice.reducer