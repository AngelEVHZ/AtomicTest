import React from 'react';
import '../cards.css';
import CardContent from '../card-content/card-content';
import '../../../styles.css';

export default function Card(props) {
  const {type} = props;
  return (
    <div className={`card ${type}`}>
      <CardContent  {...props}>
        {props.children}
      </CardContent>
    </div>
  )
};
