import React from 'react';
import Title from "../../../components/title/title";
import circleImage from "../../../imgs/Group 4014.png";
import GenericRoundedButton from "../../../components/generic-rounded-button/generic-rounded-button";
export default class UserInfoSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
        value: "",
        edited: false,
        minimun: 5,
      },
      lastName: {
        value: "",
        edited: false,
        minimun: 1,
      }
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name || target.id;
    const input = this.state[name];

    this.setState({
      [name]: {
        ...input,
        value,
        edited: true
      }
    });
  }

  nextSection = () =>{
    const name = this.state.name.value;
    const lastName = this.state.lastName.value;
    this.props.nextSection({name, lastName});
  }

  inputValidation(key) {
    const input = this.state[key];
    return input.edited && input.value.length < input.minimun;
  }

  render() {
    const { name, lastName } = this.state;
    const formValid = name.edited && lastName.edited && !this.inputValidation('name') && !this.inputValidation('lastName');

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
                <input
                  type="text"
                  className={`form-control form-control-lg ${this.inputValidation('name') ? 'is-invalid' : ''}`} id="name"
                  value={this.state.name.value} onChange={this.handleInputChange}
                  required />
                <div className="invalid-feedback font-weight-bold">
                  El nombre deberá tener mínimo 5 caracteres
               </div>

              </div>
              <div class="form-group">
                <label for="lastName" className="h3 text-white">Apellidos</label>
                <input type="text"
                  id="lastName"
                  className={`form-control form-control-lg ${this.inputValidation('lastName') ? 'is-invalid' : ''}`}
                  value={this.state.lastName.value} onChange={this.handleInputChange}
                  required />
                <div className="invalid-feedback font-weight-bold">
                  El apellido deberá tener mínimo 1 caracteres
               </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col  align-self-center  d-flex justify-content-end">
            <GenericRoundedButton
              btnColor={"#FA4D09"}
              textColor={"white"}
              callBack={this.nextSection}
              disabled={!formValid}>
              Continuar
            </GenericRoundedButton>
          </div>
        </div>
      </div>
    );
  }
}