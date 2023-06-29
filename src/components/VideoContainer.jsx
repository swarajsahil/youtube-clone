import { useEffect, useState } from "react"
// import { youtube_api } from "./contants"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { openMenu } from "../utils/appSlice";
const VideoContainer = () => {
    const dispatch=useDispatch()
    const searchValue=useSelector(store=>store.searchBtn.searchResult)
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        const getYoutubeVideo=async()=>{
            const data=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=IN&q=${searchValue}&type=video&key=AIzaSyAneT3rSANEv9d6OI2NTh6eqZKORwUP8WM`);
            const json=await data.json();
            setVideos(json.items);
           }
        getYoutubeVideo();
        dispatch(openMenu());
    },[searchValue])
    // put searchValue in array dependency
   
    
  return (
    <div className="m-4 flex gap-3 justify-center flex-wrap">
        {
            videos.map((video)=><Link to={`/watch?v=${video?.id?.videoId}&r=${video?.snippet?.channelTitle}`} key={video.id.videoId}><VideoCard info={video} /></Link>)
        }
    </div>
  )
}

export default VideoContainer

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1
// AIzaSyDvZqVdlh4zKbZxNX2By9iO1W_FVkM5xRA