import React from 'react';
import Title from "../../../components/title/title";
import circleImage from "../../../imgs/Group 4023.png";
import GenericRoundedButton from "../../../components/generic-rounded-button/generic-rounded-button";
export default class PhoneSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: "",
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1 align-self-center  d-flex justify-content-start">
            <img src={circleImage} />
          </div>
          <div className="col-11  align-self-center  d-flex justify-content-start">
            <Title text={"VALIDA TU"} subText={"CELULAR"} inline={true}></Title>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h3 className="text-white ">Necesitamos validar tu número para continuar</h3>
            <h4 className="text-white ">Ingresa tu número a 10 dígito y te enviaremos un código SMS</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-8">
            <form>
              <div class="form-group">
                <label for="phone" className="h3 text-white">Número de celular</label>
                <input type="text" class="form-control form-control-lg" id="phone" />
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col  align-self-center  d-flex justify-content-end">
            <GenericRoundedButton
              btnColor={"#FA4D09"}
              textColor={"white"}
              callBack={this.props.nextSection}>
              Continuar
            </GenericRoundedButton>
          </div>
        </div>
      </div>
    );
  }
}