import React from 'react';
import '../../../styles.css';
import '../home.css';
import Section from '../../../components/section/section';
import RegisterButtonLink from '../../../components/register-button-link/register-button-link';
import KnowMoreButton from '../../../components/know-more-button/know-more-button';
import astronauta from '../../../imgs/Group 4032.png';


export default function WelcomeSection() {
  return (
    <Section className="wrapper-section-1 py-2">
      <br /><br /><br />  <br /><br /><br />
      <div className="row">
        <div className="col-lg-6 col-md-12 " >
          <img src={astronauta} className="float-right" id="test" />
        </div>
        <div className="col-lg-6 col-md-12  d-flex align-items-center ">
          <div className="text-center" >
            <div className="text-white font">
              <h1 className="text-large font-weight-bold mb-0"> Desarrolla todo</h1>
              <h1 className="text-large font-weight-bold text-orange mb-0">tu POTENCIAL</h1>
              <h1 className="text-large font-weight-bold mb-0">dentro del equipo</h1>
              <h1 className="text-large font-weight-bold mb-0"><span className="text-orange">ATOMIC</span>LABS</h1>
            </div>
            <div className="py-4">
              <RegisterButtonLink></RegisterButtonLink>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="row">
        <div className="col-12 d-flex justify-content-center know-more">
          <KnowMoreButton></KnowMoreButton>
        </div>
      </div>
    </Section>
  )
};
