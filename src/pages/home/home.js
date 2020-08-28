import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import WelcomeSection from './sections/welcome-section';
import AboutUsSection from './sections/about-us-section';
import JoinUsSection from './sections/join-us-section';
import AtomicInfoSection from './sections/atomic-info-section';


export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <WelcomeSection></WelcomeSection>
        <AboutUsSection></AboutUsSection>
        <JoinUsSection></JoinUsSection>
        <AtomicInfoSection></AtomicInfoSection>
        <Footer></Footer>
      </div>);
  }
}