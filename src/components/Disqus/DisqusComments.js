import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = ({ post }) => {
  const disqusShortname = 'hellojs';
  const disqusConfig = {
    url: 'localhost:3000',
    identifier: 1001, // Single post id
    title: 'Basic JavaScript', // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
