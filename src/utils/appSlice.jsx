import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenu:true,
},
    reducers:{
        menu:(state)=>{
            state.isMenu=!state.isMenu;
        },
        closeMenu:(state)=>{
            state.isMenu=false;
        },
            openMenu:(state)=>{
                if(!state.isMenu){
                    state.isMenu=true;
                }
            }
    }
})
export const {menu,closeMenu,openMenu}=appSlice.actions;
export default appSlice.reducer;