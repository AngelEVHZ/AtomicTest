import React from 'react';
import './progress-bar.css';

export default function CircleSectionImage(props) {
  const { percentage, focusImage, image, checked, currentProgress, targetProgress } = props;
  let showImage = image;
  if (currentProgress == targetProgress) {
    showImage = focusImage;
  } else if (currentProgress > targetProgress) {
    showImage = checked;
  }
  return (
    <img src={showImage} className="circle" style={{ left: percentage }} />
  )
};
