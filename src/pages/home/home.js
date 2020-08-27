import React from 'react';
import './home.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import RegisterButtonLink from '../../components/register-button-link/register-button-link';
import KnowMoreButton from '../../components/know-more-button/know-more-button';
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
                <div className="col-6 " >
                  <img src={astronauta} className="float-right" />
                </div>
                <div className="col-6 d-flex align-items-center ">
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
              <div className="row">
                <div className="col-12 d-flex justify-content-center know-more">
                 <KnowMoreButton></KnowMoreButton>
                </div>
              </div>
            </div>
          </section>
          <br /><br /><br />

          <Footer></Footer>
        </div>
      </div>);
  }
}