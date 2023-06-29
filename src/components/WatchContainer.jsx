import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import RecommendedCard from "./RecommendedCard";
import CommentContainer from "./CommentContainer";
const WatchContainer = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const result= params.get("r").slice(0,8);
  // console.log(params.get("r"),result);
const [videos,setVideos]=useState([]);
async function getRecommendedVideo(){
  const data=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&regionCode=IN&q=${result}&type=video&key=AIzaSyAneT3rSANEv9d6OI2NTh6eqZKORwUP8WM`);
  const json=await data.json();
  // console.log(json);
  setVideos(json.items)
}
  useEffect(() => {
    dispatch(closeMenu());
    getRecommendedVideo();
  }, []);
  return (
    <div className="grid md:grid-flow-row w-full">
    <div className="m-auto mt-5 grid-cols-11 w-3/4 md:w-3/4 lg:w-2/4">
      <iframe
        className="w-full h-[22rem]"
        src={`https://www.youtube.com/embed/${params.get("v")}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div>
    <CommentContainer/>
    </div>
    <div className="flex flex-col gap-1 grid-cols-1 w-96 mt-4 md:px-5 sm:px-2">
    {
      videos.map((video)=><Link to={`/watch?v=${video?.id?.videoId}&r=${video?.snippet?.channelTitle}`} key={video.id.videoId}><RecommendedCard info={video}/></Link>)
    }
    </div>
    </div>
  );
};

export default WatchContainer;
