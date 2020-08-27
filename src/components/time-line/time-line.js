import React from 'react';
import '../../styles.css';
import './time-line.css';
import Arrow from '../../imgs/arrow.png';
export default function TimeLine() {
  return (
    <div className="container">
      <div className="row text-white  font-weight-bold text-small text-center text-heaig-normal">
        <div className="col-3">
          Contratación remota
      </div>
        <div className="col-1">
          <img src={Arrow}></img>
        </div>
        <div className="col-2">
          Entrevista con el área de RH
      </div>
        <div className="col-1">
          <img src={Arrow}></img>
        </div>
        <div className="col-2">
          Prueba práctica
      </div>
        <div className="col-1">
          <img src={Arrow}></img>
        </div>
        <div className="col-2">
          Entrevista técnica
      </div>
      </div>
    </div>
  )
};
