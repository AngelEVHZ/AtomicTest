import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Section from '../../components/section/section';
import ProgressBar from '../../components/progress-bar/progress-bar';

import image from '../../imgs/Group-4033.png';
export default class Register extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Section className="wrapper-section-1">
          <div className="container-fluid m-5">
            <div className="row">
              <div className="col-8">
                <ProgressBar></ProgressBar>
              </div>

              <div className="col-4">
                <img src={image} />
            </div>
              </div>
            </div>
        </Section>
          <Footer></Footer>
      </div>
    );
  }
}