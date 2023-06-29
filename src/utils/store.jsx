import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import suggestionSlice from "./suggestionSlice";
import searchBtnSlice from "./searchBtnSlice";
const store=configureStore({
    reducer:{
        app:appSlice,
        search:suggestionSlice,
        searchBtn:searchBtnSlice
    }
})
export default store;