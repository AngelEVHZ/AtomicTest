

import React from 'react';

import image1 from '../../../imgs/Group-4033.png';
import image2 from '../../../imgs/Group 4034.png';
import image3 from '../../../imgs/Group 4038.png';

const images = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image2
  },
  {
    image: image3
  }
];

export default function ImageSection(props) {
  const { progress } = props;
  return (
    <img src={images[progress].image} />
  )
};

