const VideoCard = ({ info }) => {
    // const {snippet,statistics}=info;
    // const {thumbnails,channelTitle,publishedAt,title}=snippet;
    // console.log(info.snippet.thumbnails.medium);
  return (
    <div className="w-64 h-80 shadow-lg">
    <img src={info?.snippet?.thumbnails?.medium?.url} alt="thumnail" />
    <p className="text-lg font-medium">{info?.snippet?.title}</p>
    <p className="font-bold text-lg">{info?.snippet?.channelTitle}</p>
    {/* <span>{Math.floor(info?.statistics.viewCount/1000)}K</span> */}
    </div>
  )
}

export default VideoCard;