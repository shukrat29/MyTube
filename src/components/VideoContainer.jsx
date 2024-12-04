import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(import.meta.env.VITE_YOUTUBE_VIDEOLIST_API_URL);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* Render VideoCard only if videos is available */}
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoContainer;
