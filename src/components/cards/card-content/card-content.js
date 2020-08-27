import React from 'react';
import '../cards.css';
import '../../../styles.css';
import SectionLine from '../section-line/section-line';
export default function CardContent(props) {
  const { img, title, list } = props;
  return (
    <div>
      <div className="row pt-3">
        <div className="col-12 ">
          <img src={img} className="rounded mx-auto d-block" />
        </div>
      </div>
      <SectionLine color={title.class}/>
      <div className="row">
        <div className="col-12 text-center ">
          <h2 className={`font-weight-bold text-title ${title.class || 'text-white'}`}>{title.text}</h2>
        </div>
      </div>
      <div className="row p-3">
        <div className={`col-12 text-justify text-list ${list.class || 'text-white'}`}>
          {props.children}
        </div>
      </div>
    </div>
  )
};
