import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Section from '../../components/section/section';
import ProgressBar from '../../components/progress-bar/progress-bar';

import image from '../../imgs/Group-4033.png';
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    }
  }

  nextSection = () => {
    let progress = this.state.progress;
    if (progress <= 2) progress++;
    this.setState({ progress });
  }

  previewSection = () => {
    let progress = this.state.progress;
    if (progress > 0) progress--;
    this.setState({ progress });
  }

  render() {
    const { progress } = this.state;
    return (
      <div>
        <Header></Header>
        <Section className="wrapper-section-1">
          <div className="container-fluid m-5">
            <div className="row">
              <div className="col-8">
                <ProgressBar progress={progress}></ProgressBar>
                <div className="row">
                  <div className="col my-3">
                    <label className="font-weight-bold text-white" onClick={this.previewSection}>Regresar</label>
                  </div>
                </div>




              </div>
              <div className="col-4">
                <img src={image} />
              </div>
            </div>
          </div>

          <button onClick={this.nextSection}>NEXS</button>
        </Section>
        <Footer></Footer>
      </div>
    );
  }
}