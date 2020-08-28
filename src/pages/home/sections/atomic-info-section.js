import React from 'react';
import '../../../styles.css';
import '../home.css';
import Section from '../../../components/section/section';
import Title from '../../../components/title/title';


export default function AtomicInfoSection() {
  return (
    <Section className="wrapper-section-2">
      <Title text={'¿POR QUÉ'} subText={'ATOMIC?'} inline={true}></Title>
    </Section>
  )
};
