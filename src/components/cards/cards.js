import React from 'react';
import './cards.css';
import Card from './card/card';

import centerImage from "../../imgs/Group-4036.png";
import leftImage from "../../imgs/Group-4035.png";
import rigtImage from "../../imgs/Group-4037.png";

const cardProps = [
  {
    type: "secondary",
    img: leftImage,
    title: {
      text: 'EXPLORA',
      class: "text-orange"
    },
    list: {
      class: "text-black"
    }
  },
  {
    type: "primary",
    img: centerImage,
    title: {
      text: 'IMAGINA',
      class: null
    },
    list: {
      class: null
    }
  },
  {
    type: "secondary",
    img: rigtImage,
    title: {
      text: 'CONQUISTA',
      class: "text-orange"
    },
    list: {
      class: "text-black"
    }
  }
];

export default function Cards() {
  return (
    <div className="row py-5">
      <div className="col-4 align-self-center d-flex justify-content-end p-0 card-left">
        <Card {...cardProps[0]}>
          <ul>
            <li className="pb-2">Innovación y <b className="p-0 m-0">creación tecnológica</b></li>
            <li className="pb-2"><b>UI/UX</b> </li>
            <li className="pb-2"><b>Innovación</b></li>
          </ul>
        </Card>
      </div>
      <div className="col-4 align-self-center">
        <Card {...cardProps[1]} >
          <ul>
            <li className="pb-2"><b>Estrategia</b> Digital  </li>
            <li className="pb-2">Big Data & <b>Analysis</b></li>
            <li className="pb-2"><b>Consultoría</b> Tecnológica</li>
            <li className="pb-2"><b>Reducción</b> de costos TI</li>
          </ul>
        </Card>
      </div>
      <div className="col-4 align-self-center  d-flex justify-content-start p-0 card-right">
        <Card {...cardProps[2]} >
          <ul>
            <li className="pb-2">Desarrollo tecnológico <b>a la medida</b></li>
            <li className="pb-2"><b>Ciberseguridad</b></li>
            <li className="pb-2"><b>Servicios de la Nube</b></li>
          </ul>
        </Card>
      </div>
    </div>
  )
};
