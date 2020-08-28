import React from 'react';
import '../../../styles.css';
import '../home.css';
import Section from '../../../components/section/section';
import Cards from '../../../components/cards/cards';
import Title from '../../../components/title/title';


export default function AboutUsSection() {
  return (
    <Section className="wrapper-section-2">
        <Title text={'SOMOS EL BRAZO DERECHO'} subText={'DE LA TECNOLOGÍA'}></Title>
        <Cards></Cards>
    </Section>
  )
};
