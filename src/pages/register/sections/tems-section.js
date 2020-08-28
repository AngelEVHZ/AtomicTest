import React from 'react';
import Title from "../../../components/title/title";
import circleImage from "../../../imgs/Group 4025.png";
import { Link } from "react-router-dom";
import GenericRoundedButton from "../../../components/generic-rounded-button/generic-rounded-button";
export default class TermsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      terms: false,
    }
  }
  handleCheck = () => {
    this.setState({
      terms: !this.state.terms
    });
  }

  render() {
    const formValid = this.state.terms;
    return (
      <div>
        <div className="row">
          <div className="col-1 align-self-center  d-flex justify-content-start">
            <img src={circleImage} />
          </div>
          <div className="col-11  align-self-center  d-flex justify-content-start">
            <Title text={"Términos y"} subText={"Condiciones"} inline={true}></Title>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h4 className="text-white ">Por favor revisa nuestros términos y condiciones para este servicio:</h4>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-8">
            <a href="#" for="code" className="text-small text-white ">Consulta Términos y Condiciones</a>
            <form>
              <div class="custom-control custom-checkbox mt-5">
                <input type="checkbox" class="custom-control-input" id="terms"
                  onChange={this.handleCheck} />
                <label className="custom-control-label text-white text-small" for="terms">Acepto los Términos y Condiciones</label>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col  align-self-center  d-flex justify-content-end">
            <GenericRoundedButton
              btnColor={"#FA4D09"}
              textColor={"white"}
              callBack={this.props.nextSection}
              disabled={!formValid}>
              Enviar
            </GenericRoundedButton>
          </div>
        </div>
      </div>
    );
  }
}