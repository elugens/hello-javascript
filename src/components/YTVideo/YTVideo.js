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

// embed your video Example:

// inside of yourfile.md or yourfile.mdx

{
  /* 
***video embed start***

  <YTVideo
  videoURL='https://www.youtube.com/embed/W6NZfCO5SIk'
  videoTitle='JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour'
  />;

***video embed end***

*/
}
