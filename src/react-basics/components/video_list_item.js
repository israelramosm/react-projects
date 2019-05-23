import React from "react";

const VideoListItem = ({ video, onVideoClick }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const { title, channelTitle } = video.snippet;
  console.log(video);
  return (
    <li onClick={() => onVideoClick(video)} className="list-group-item">
      <div className="media">
        <img src={imageUrl} alt="thumbnail" />

        <div className="media-body">
          <div className="media-heading mt-0 mb-2 ml-2">{title}</div>
          <div className="media-channel-title ml-2">{channelTitle}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
