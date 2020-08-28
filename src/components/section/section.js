import React from 'react';
export default function Section(props) {
  return (
    <section className={props.className}>
      <div className="container-fluid">
        {props.children}
      </div>
    </section>
  )
};
