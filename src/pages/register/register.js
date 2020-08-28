import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Section from '../../components/section/section';
import ProgressBar from '../../components/progress-bar/progress-bar';
import BackButton from "../../components/back-button/back-button";
import UserInfoSection from "./sections/user-info-section";
import PhoneSection from "./sections/phone-section";
import VerificationCodeSection from "./sections/verification-code-section";
import TermsSection from "./sections/tems-section";
import ImageSection from "./sections/image-section";
import "./register.css";
import '../../styles.css';
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      phone: '',
      progress: 0,
    }
  }

  nextSection = (data) => {
    if (data) {
      this.setState({
        ...data
      })
    }
    let progress = this.state.progress;
    if (progress <= 2) progress++;
    this.setState({ progress });
  }

  endForm = () => {
    this.props.history.push("/home");
  }

  previewSection = () => {
    let progress = this.state.progress;
    if (progress > 0) progress--;
    this.setState({ progress });
  }

  renderSection() {
    let section;
    const sectionProps = {
      nextSection: this.nextSection,
    }
    switch (this.state.progress) {
      default:
      case 0:
        section = <UserInfoSection {...sectionProps} />
        break
      case 1:
        section = <PhoneSection {...sectionProps} />
        break
      case 2:
        section = <VerificationCodeSection {...sectionProps} phone={this.state.phone} />
        break
      case 3:
        section = <TermsSection nextSection={this.endForm} />
        break
    }
    return section;
  }

  render() {
    const { progress } = this.state;
    return (
      <div>
        <Header></Header>
        <Section className="wrapper-section-1">
          <div className="container-fluid m-5">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <ProgressBar progress={progress}></ProgressBar>
                <div className="row back-button-div">
                  <div className="col my-3">
                    <BackButton callBack={this.previewSection} hide={progress == 0}> </BackButton>
                  </div>
                </div>
                {this.renderSection()}
              </div>
              <div className="col-lg-4 col-md-12">
                <ImageSection progress={progress} />
              </div>
            </div>
          </div>
        </Section>
        <Footer></Footer>
      </div>
    );
  }
}