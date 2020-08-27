import React from 'react';
import './home.css';
import '../../styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import RegisterButtonLink from '../../components/register-button-link/register-button-link';
import KnowMoreButton from '../../components/know-more-button/know-more-button';
import Cards from '../../components/cards/cards';

import astronauta from '../../imgs/Group 4032.png';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="back-ground">
          <Header></Header>
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 " >
                  <img src={astronauta} className="float-right" />
                </div>
                <div className="col-lg-6 col-md-12  d-flex align-items-center ">
                  <div className="text-center">
                    <div class="text-white font">
                      <h1 class="text-large font-weight-bold mb-0"> Desarrolla todo</h1>
                      <h1 class="text-large font-weight-bold text-orange mb-0">tu POTENCIAL</h1>
                      <h1 class="text-large font-weight-bold mb-0">dentro del equipo</h1>
                      <h1 class="text-large font-weight-bold mb-0"><span className="text-orange">ATOMIC</span>LABS</h1>
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
          <br /><br /><br />  <br /><br /><br />
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 d-flex justify-content-center ">
                  <div className="text-center">
                    <div class="text-white font">
                      <h1 class="text-medium font-weight-bold mb-0">SOMOS EL BRAZO DERECHO</h1>
                      <h1 className="text-medium font-weight-bold mb-0 mt-0 text-orange">DE LA TECNOLOGÍA</h1>
                    </div>
                  </div>
                </div>
              </div>

            <Cards></Cards>

            </div>
          </section>

          <br /><br /><br />  <br /><br /><br />
          <Footer></Footer>
        </div>
      </div>);
  }
}