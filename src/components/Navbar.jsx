import {useDispatch, useSelector} from "react-redux";
import { menu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheSuggestion } from "../utils/suggestionSlice";
import { searchResult } from "../utils/searchBtnSlice";
// import appSlice from "../utils/appSlice";

const Navbar = () => {
  const dispatch=useDispatch();
  const [searchQuery,setSearchQuery]=useState("");
  const [show,setShow]=useState(false);
  const [showSuggestion,setShowSuggestion]=useState([]);
  const cacheSearch=useSelector((store)=>store.search)
  // console.log(searchQuery);
  // const menu=useSelector(store=>store.app.menu)
  const getYoutubeSuggestion=async()=>{
    const data=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
    const json =await data.json();
    // console.log(json);
    setShowSuggestion(json[1]);
    dispatch(cacheSuggestion({
      [searchQuery]:json[1]
    }));
  }
  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(cacheSearch[searchQuery]){
        setShowSuggestion(cacheSearch[searchQuery]);
      }else{
      getYoutubeSuggestion()
      }
    },200);

    // console.log(searchQuery);
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])
  return (
    <div className="flex justify-between shadow-lg w-full h-12 items-center">
    <div className="flex">
      <img className="h-10" onClick={()=>dispatch(menu())} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fCH_Pu_uWRgqR4bXUknjpz07igKC0GvSVQ&usqp=CAU" alt="menubar" />
      <img className="h-10" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="logo" />
    </div>
    <div><div className="flex grid-cols-10">
      <input type="text" className="w-80 border-gray-300 border-2 rounded-l-full" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShow(true)} onBlur={()=>setShow(false)}/>
      <img className="h-8 border-2 border-gray-300 px-2 rounded-r-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIipC-vMEFEecKPfRr66bvMgAF7KPhvg8PA&usqp=CAU" alt="search-btn" onClick={()=>dispatch(searchResult(searchQuery))}/>
    </div>
    {
      show && (<div className="fixed bg-white w-[23rem] rounded-lg">
      <ul>
      {
         showSuggestion.map((suggestion,i)=><li key={i} className="p-2 hover:bg-slate-200">🔍 {suggestion}</li>)
      }
      </ul>
    </div>)
    }</div>
    <div className="grid-cols-1">
      <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU" alt="user" />
    </div>
    </div>
  )
}

export default Navbar