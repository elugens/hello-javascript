import React from 'react';
const YTVideo = ({ videoURL, videoTitle }) => (
  <div className='videoWrapper'>
    <iframe
      src={videoURL}
      title={videoTitle}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      frameBorder='0'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allowFullScreen
    />
  </div>
);
export default YTVideo;
