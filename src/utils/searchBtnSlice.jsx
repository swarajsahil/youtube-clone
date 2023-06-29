import { createSlice } from "@reduxjs/toolkit";

const searchBtnSlice=createSlice({
    name:"searchBtn",
    initialState:{
        searchResult:"coding"
    },
    reducers:{
        searchResult:(state,action)=>{
            state.searchResult=action.payload;
        }
    }
})
export const {searchResult}=searchBtnSlice.actions;
export default searchBtnSlice.reducer;