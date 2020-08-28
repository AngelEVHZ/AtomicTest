import React from 'react';
export default function ProgressBar() {

  const style = {
    width:"20%",
  };
  return (
    <div>
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={style} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  )
};
