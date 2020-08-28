import React from 'react';
import './progress-bar.css';
import CircleSectionImage from "./circle-section-image";

import imgF1 from "../../imgs/Group 4014.png";
import img2 from "../../imgs/Group 4019.png";
import imgF2 from "../../imgs/Group 4023.png";
import img3 from "../../imgs/Group 4017.png";
import imgF3 from "../../imgs/Group 4024.png";
import img4 from "../../imgs/Group 4018.png";
import imgF4 from "../../imgs/Group 4025.png";
import checked from "../../imgs/Group 4016.png";
const sources = [
  {
    targetProgress: 0,
    percentage: "20%",
    focusImage: imgF1,
    image: imgF1,
    checked
  },
  {
    targetProgress: 1,
    percentage: "40%",
    focusImage: imgF2,
    image: img2,
    checked
  },
  {
    targetProgress: 2,
    percentage: "60%",
    focusImage: imgF3,
    image: img3,
    checked
  },
  {
    targetProgress: 3,
    percentage: "80%",
    focusImage: imgF4,
    image: img4,
    checked
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
      width: ((progress + 1) * 25) + "%",
    };
    return (
      <div>
        {sources.map( (source,index) => {
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
