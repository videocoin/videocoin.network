import React from 'react';

const Video = ({
  videoSrcURL,
  videoTitle,
}: {
  videoSrcURL: string;
  videoTitle: string;
}) => (
  <iframe
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    allowFullScreen
  />
);
export default Video;
