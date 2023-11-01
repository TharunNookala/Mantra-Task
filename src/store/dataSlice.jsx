import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {     
        setForm: (state, action) => {
            state.data.push(action.payload)
        },
        editProfile : (state, action)=>{
            const {id, name, email, phone, age} = action.payload
            const profile = state.data.find((item=>item.id===id))
            if(profile){
                profile.name=name
                profile.email=email
                profile.phone=phone
                profile.age=age
            }
        },
        deleteProfile:(state, action)=>{
            const id= action.payload
            state.data=state.data.filter((item=>item.id!==id))
        }
    
    }
})

export const { setForm, editProfile, deleteProfile} = dataSlice.actions;
export default dataSlice.reducer;
