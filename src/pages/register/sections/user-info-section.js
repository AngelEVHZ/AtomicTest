import React from 'react';
import Title from "../../../components/title/title";
import circleImage from "../../../imgs/Group 4014.png";
import GenericRoundedButton from "../../../components/generic-rounded-button/generic-rounded-button";
export default class UserInfoSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      lastName: "",
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
            <Title text={"Te queremos"} subText={"conocer"} inline={true}></Title>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h3 className="text-white ">Queremos saber que eres tu, por favor ingresa los siguientes datos:</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-8">
            <form>
              <div class="form-group">
                <label for="name" className="h3 text-white">Nombre (s)</label>
                <input type="text" class="form-control form-control-lg" id="name" />
              </div>
              <div class="form-group">
                <label for="lastName" className="h3 text-white">Apellidos</label>
                <input type="text" class="form-control form-control-lg" id="lastName" />
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