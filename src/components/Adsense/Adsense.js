import React from 'react';

class AdSense extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-5606137173126649'
          data-ad-slot='3615666284'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </div>
    );
  }
}

export default AdSense;
