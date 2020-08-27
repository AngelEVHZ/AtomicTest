import React from 'react';
import '../../styles.css';
export default function Title(props) {
  const { text, subText, inline } = props;
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center ">
        <div className="text-center">
          <div className="text-white font">
            <h1 className="text-medium text-uppercase font-weight-bold mb-0 ">
              {text}
              {inline && <span className="text-orange"> {subText}</span>}
            </h1>
            {!inline &&
              <h1 className="text-medium text-uppercase font-weight-bold mb-0 mt-0 text-orange">
                {subText}
              </h1>
            }
          </div>
        </div>
      </div>
    </div>
  )
};
