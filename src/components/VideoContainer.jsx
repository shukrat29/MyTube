import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(import.meta.env.VITE_YOUTUBE_VIDEOLIST_API_URL);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* Render VideoCard only if videos[0] is available */}
      {videos.length > 0 ? (
        videos.map((video) => <VideoCard info={video} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoContainer;
