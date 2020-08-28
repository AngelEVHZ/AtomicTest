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


  nextSection = () =>{
    const phone = this.state.phone;
    this.props.nextSection({phone});
  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name || target.id;
    if (value.length > 10)return;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const formValid = this.state.phone.length === 10;
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
                <input type="number" class="form-control form-control-lg" id="phone"
                maxlength="10"
                 value={this.state.phone} onChange={this.handleInputChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col  align-self-center  d-flex justify-content-end">
            <GenericRoundedButton
              btnColor={"#FA4D09"}
              textColor={"white"}
              disabled={!formValid}
              callBack={this.nextSection}>
              Continuar
            </GenericRoundedButton>
          </div>
        </div>
      </div>
    );
  }
}