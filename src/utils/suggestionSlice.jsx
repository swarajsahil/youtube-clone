import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice=createSlice({
    name:"search",
    initialState:{
    },
    reducers:{
        cacheSuggestion:(state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }
})
export const {cacheSuggestion}=suggestionSlice.actions;
export default suggestionSlice.reducer;