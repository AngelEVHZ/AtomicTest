

import React from 'react';
import './footer.css';
import '../../styles.css';
import logoLinkedin from '../../imgs/linkedin.png';
import logoTwitter from '../../imgs/twitter.png';
export default function Footer() {
  return (
    <footer >
      <div className="container">
        <div className="row py-5">
          <div className="col-8 align-self-center">
            <h3 className="text-white font-weight-bold text-small">© 2020 AtomicLabs. Todos los derechos reservados.</h3>
          </div>
          <div className="col-4">

            <div className="row">
              <div className="col-8">

                <a href='#' className="text-white font-weight-bold text-small">Aviso de privacidad.</a>
              </div>
              <div className="col-2 text-center">
                <img src={logoLinkedin} />
              </div>
              <div className="col-2 text-center">
                <img src={logoTwitter} className="twitter-logo"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
};

