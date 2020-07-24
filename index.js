import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Slider from './components/Slider';

const videoOptions = {
  fluid: true,
  autoplay: false,
  controls: false,
  responsive: true,
  preload: "none",
  sources: [
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      type: "video/mp4"
    }
  ]
};

const dummyVideos = Array.from({ length: 15 }, (i, j) => ({
  ...videoOptions,
  id: "dummy-video-" + j
}));

const App = () => {
   return (
      <div>
        <Slider>
          {dummyVideos.map(video => (
            <Slider.Item video={video} key={video.id} />
          ))}
        </Slider>
      </div>
    );
}

render(<App />, document.getElementById('root'));
