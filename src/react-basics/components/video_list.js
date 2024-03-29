import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video, index) => (
    <VideoListItem
      onVideoClick={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return <ul className="col-12 col-lg-6 list-group">{videoItems}</ul>;
};

export default VideoList;
