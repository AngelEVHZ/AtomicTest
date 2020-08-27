import React from 'react';
import './home.css';
import '../../styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import RegisterButtonLink from '../../components/register-button-link/register-button-link';
import KnowMoreButton from '../../components/know-more-button/know-more-button';
import Cards from '../../components/cards/cards';
import Title from '../../components/title/title';
import TimeLine from '../../components/time-line/time-line';

import astronauta from '../../imgs/Group 4032.png';
import section3image from '../../imgs/Group-4040.png';

export default class Home extends React.Component {

  render() {
    return (
      <div>

        <section className="wrapper-section-1 py-3">
          <Header></Header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 " >
                <img src={astronauta} className="float-right" />
              </div>
              <div className="col-lg-6 col-md-12  d-flex align-items-center ">
                <div className="text-center">
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
          </div>
        </section>
        <section className="wrapper-section-2">
          <br /><br /><br />  <br /><br /><br />
          <div className="container-fluid">
            <Title text={'SOMOS EL BRAZO DERECHO'} subText={'DE LA TECNOLOGÍA'}></Title>
            <Cards></Cards>
          </div>
        </section>
        <section className="wrapper-section-2">
          <div className="container-fluid">
            <Title text={'¡Te encantará'} subText={'trabajar Con nosotros!'}></Title>
            <div className="row pt-3">
              <div className="col-12 ">
                <img src={section3image} className="rounded mx-auto d-block" />
              </div>
            </div>
            <TimeLine className="my-y5"></TimeLine>
            <br />
            <div className="row my-5">
              <div className="col-12 d-flex justify-content-center know-more">
                <RegisterButtonLink></RegisterButtonLink>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper-section-2">
          <div className="container-fluid">
            <Title text={'¿POR QUÉ'} subText={'ATOMIC?'} inline={true}></Title>
          </div>
        </section>
        <Footer></Footer>
      </div>);
  }
}