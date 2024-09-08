

const VideoCard = ({info})=>{
  console.log(info)

  const {snippet, statistics} = info;

  const {thumbnails, channelTitle, title}= snippet;
 
    return(
        <div className="p-2 m-2 shadow-xl w-72 rounded-xl bg-gray-50">
          <img className="rounded-lg" src={thumbnails.medium.url} alt="logo"></img>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )

}

export default VideoCard;