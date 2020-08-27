

import React from 'react';
import './section-line.css';

export default function SectionLine(props) {
  const { color } = props;
  return (
    <div className="row  d-flex d-flex justify-content-center">
      <div className="col-4 d-flex justify-content-end left ">
        <hr className={`large ${color || 'text-white'}`} />
      </div>
      <div className="col-2  d-flex justify-content-center">
        <hr className={`short ${color || 'text-white'}`} />
      </div>
      <div className="col-4 d-flex justify-content-start right">
        <hr className={`large ${color || 'text-white'}`} />
      </div>
    </div>
  )
};




