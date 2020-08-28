import React from 'react';
import Title from "../../../components/title/title";
import circleImage from "../../../imgs/Group 4024.png";
import GenericRoundedButton from "../../../components/generic-rounded-button/generic-rounded-button";
export default class VerificationCodeSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "",
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
            <Title text={"Código de"} subText={"Verificación"} inline={true}></Title>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h3 className="text-white ">Te enviamos un SMS al número:</h3>
            <h4 className="text-white ">+52 56 1257 6780</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-8">
          <label for="code" className="h4 text-white mb-4">Ingresa el código de verificación:</label>
            <form>
              <div class="form-group">
                <label for="code" className=" text-white">Código de verificación</label>
                <input type="text" class="form-control form-control-lg" id="code" />
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