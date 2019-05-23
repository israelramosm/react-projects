import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const { title, description } = video.snippet;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-12 col-lg-6">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={title} />
      </div>

      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
