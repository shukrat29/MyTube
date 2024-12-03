import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  console.log(info);
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img className="rounded-md" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="py-2">
        <li className="font-bold">{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
