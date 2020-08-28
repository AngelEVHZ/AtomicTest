import React from 'react';
import '../../../styles.css';
import '../home.css';
import Section from '../../../components/section/section';
import Title from '../../../components/title/title';
import TimeLine from '../../../components/time-line/time-line';
import RegisterButtonLink from '../../../components/register-button-link/register-button-link';

import image from '../../../imgs/Group-4040.png';
export default function JoinUsSection() {
  return (
    <Section className="wrapper-section-2">
      <Title text={'¡Te encantará'} subText={'trabajar Con nosotros!'}></Title>
      <div className="row pt-3">
        <div className="col-12 ">
          <img src={image} className="rounded mx-auto d-block" />
        </div>
      </div>
      <TimeLine className="my-y5"></TimeLine>
      <br />
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-center know-more">
          <RegisterButtonLink></RegisterButtonLink>
        </div>
      </div>
    </Section>
  )
};
