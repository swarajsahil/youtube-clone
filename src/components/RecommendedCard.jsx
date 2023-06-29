const RecommendedCard = ({info}) => {
  return (
    <div className="w-[28rem] h-32 flex items-center">
    <img className="w-36 h-28 rounded-xl" src={info?.snippet?.thumbnails?.medium?.url} alt="image" />
    <div className=" flex flex-col px-2">
    <p className="font-medium">{info?.snippet?.title}</p>
    <p className="font-bold px-1">{info?.snippet?.channelTitle}</p>
    {/* <span className="px-2 font-mono font-medium text-lg">{Math.floor(info?.statistics?.viewCount/1000)}K</span> */}
    </div>
    </div>
  )
}

export default RecommendedCard