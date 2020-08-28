import React from 'react';
import './progress-bar.css';
import CircleSectionImage from "./circle-section-image";

import successImage1 from "../../imgs/Group 4014.png";

import img2 from "../../imgs/Group 4019.png";
import focusImage2 from "../../imgs/Group 4020.png";

import img3 from "../../imgs/Group 4017.png";
import focusImage3 from "../../imgs/Group 4021.png";

import img4 from "../../imgs/Group 4018.png";
import focusImage4 from "../../imgs/Group 4022.png";

import checkedImage from "../../imgs/Group 4016.png";

const sources = [
  {
    targetProgress: 0,
    percentage: 15,
    focusImage: successImage1,
    image: successImage1,
    checked: checkedImage
  },
  {
    targetProgress: 1,
    percentage: 35,
    focusImage: focusImage2,
    image: img2,
    checked: checkedImage
  },
  {
    targetProgress: 2,
    percentage: 55,
    focusImage: focusImage3,
    image: img3,
    checked: checkedImage
  },
  {
    targetProgress: 3,
    percentage: 75,
    focusImage: focusImage4,
    image: img4,
    checked: checkedImage
  }
];

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: props.progress,
    }
  }

  componentDidMount() {
    this.setProgress(this.props.progress);
  }

  componentWillReceiveProps(newProps) {
    this.setProgress(newProps.progress);
  }

  setProgress = (progress) => {
    this.setState({ progress });
  }

  render() {
    const { progress } = this.props;
    const style = {
      width: (sources[progress].percentage+(4*progress)) + "%",
    };
    return (
      <div>
        {sources.map((source, index) => {
          return <CircleSectionImage {...source} currentProgress={progress} key={index.toString()} />
        })
        }

        <div className="progress back-bar">
          <div className="progress-bar bar" role="progressbar" style={style} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    )
  }
};
