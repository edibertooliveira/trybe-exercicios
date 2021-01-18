import React, { Component } from "react";
import Countrys from "./data";
import "./bulma.min.css";
import "./style.css";

export class TextArea extends Component {
  render() {
    const {
      type,
      name,
      placeholder,
      id,
      method,
      method2,
      className,
      max,
    } = this.props;
    return (
      <div className="field">
        <div className="control">
          <textarea
            value={this.props.value}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={method}
            onFocus={method2}
            className={`input ${className}`}
            maxLength={max}
            required
          />
        </div>
      </div>
    );
  }
}

class InputBool extends Component {
  render() {
    const { name, info, type, method } = this.props;
    return (
      <div className="field is-grouped">
        <div className="control">
          {info.map((element, index) => (
            <label className="label" key={index}>
              <input
                id={element}
                type={type}
                name={name}
                value={element}
                onChange={method}
                required
              />
              {element}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export class InputType extends Component {
  render() {
    const {
      type,
      name,
      placeholder,
      id,
      method,
      method2,
      className,
      max,
    } = this.props;
    return (
      <div className="field">
        <div className="control">
          <input
            type={type}
            value={this.props.value}
            name={name}
            id={id}
            placeholder={placeholder}
            onBlur={method2}
            onChange={method}
            className={`input ${className}`}
            maxLength={max}
            required
          />
        </div>
      </div>
    );
  }
}
class SelectType extends Component {
  render() {
    const { name, id, method } = this.props;
    return (
      <div className="field">
        <div className="select">
          <select id={id} name={name} onChange={method} required>
            <option value={this.props.value}>{this.props.value}</option>
            {Countrys.map(({ name }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

class FormConfirm extends Component {
  render() {
    const { confirm } = this.props;
    return (
      <div>
        {Object.keys(confirm).map((fieldName, index) => (
          <p key={index}>
            {fieldName} {confirm[fieldName]}
          </p>
        ))}
      </div>
    );
  }
}

class ButtonEvent extends Component {
  render() {
    const { name, type, className, method } = this.props;
    return (
      <p className="control">
        <button type={type} className={`button ${className}`} onClick={method}>
          {name}
        </button>
      </p>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      address: "",
      city: "",
      country: "",
      habitation: "",
      job: "",
      jobDescription: "",
      description: "",
      formErrors: {
        address: "is invalid",
        city: "is invalid",
        country: "is invalid",
        description: "is invalid",
        email: "is invalid",
        habitation: "is invalid",
        job: "is invalid",
        jobDescription: "is invalid",
        name: "is invalid",
        validatedForm: false,
      },
    };
  }
  resetState(field, value = "") {
    Object.keys(field).map((name) => {
      return this.setState((state) => ({
        [name]: value,
        formErrors: {
          ...state.formErrors,
          [name]: "is invalid",
          validatedForm: false,
        },
      }));
    });
  }
  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value),
      },
    }));
  }
  validateField(fieldName, value) {
    const fieldValidate = {
      email: (() => {
        const isValid = value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return isValid ? "" : " is invalid";
      })(),
    };
    return fieldValidate[fieldName] || "valid";
  }
  handleChange({ target }) {
    const { name } = target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    if (name === "name") value = value.toUpperCase();
    if (name === "address") value = value.replace(/[^\w\s]/gi, "");
    this.updateState(name, value);
  }
  onBlurHandler = (event) => {
    let { name, value } = event.target;
    if (name === "city") value = value.match(/^\d/) ? "" : value;

    this.updateState(name, value);
  };
  onMouseEnter() {
    alert("Preencha com cuidado esta informação.");
  }
  handleClear(event) {
    event.preventDefault();
    document.forms[0].reset();
    this.resetState(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    const confirm = this.state.formErrors;
    const checked = Object.keys(confirm).every(
      (fieldName) => confirm[fieldName] !== "is valid"
    );
    if (checked)
      return this.setState({
        formErrors: {
          ...this.state.formErrors,
          validatedForm: true,
        },
      });
    return alert("Campos incompletos!");
  }

  render() {
    return (
      <form className="section">
        <fieldset className="hero-body">
          <legend className="subtitle"> Dados pessoais </legend>
          <InputType
            type="text"
            name="name"
            id="name"
            method={this.handleChange}
            placeholder="Digite seu nome"
            max={40}
            value={this.state.name}
          />
          <InputType
            type="text"
            name="email"
            id="email"
            method={this.handleChange}
            placeholder="Digite seu email"
            max={50}
            value={this.state.email}
          />
          <InputType
            type="text"
            name="address"
            id="address"
            method={this.handleChange}
            placeholder="exp.: R. Itapetinga, 111"
            max={200}
            value={this.state.address}
          />
          <InputType
            type="text"
            name="city"
            id="city"
            method={this.handleChange}
            method2={this.onBlurHandler}
            placeholder="exp.: Bahia"
            max={28}
            value={this.state.city}
          />
          <SelectType
            name="country"
            id="country"
            method={this.handleChange}
            value={this.state.country}
          />
          <InputBool
            type="radio"
            name="habitation"
            info={["Casa", "Apartamento"]}
            method={this.handleChange}
          />
        </fieldset>
        <fieldset className="hero-body">
          <legend className="subtitle">Dados do seu último emprego</legend>
          <TextArea
            type="text"
            name="description"
            id="description"
            method={this.handleChange}
            placeholder="Resumo do currículo "
            max={1000}
            value={this.state.description}
          />
          <InputType
            type="text"
            name="job"
            id="job"
            method={this.handleChange}
            placeholder="Cargo"
            max={40}
            value={this.state.job}
          />
          <TextArea
            type="text"
            name="jobDescription"
            id="jobDescription"
            method={this.handleChange}
            method2={this.onMouseEnter}
            placeholder="Descrição do cargo"
            max={500}
            value={this.state.jobDescription}
          />
        </fieldset>
        <div className="field is-grouped">
          <ButtonEvent
            name="Consolidar"
            className="is-link"
            method={this.handleSubmit}
            type="submit"
          />
          <ButtonEvent
            name="Limpar form"
            className="is-danger"
            method={this.handleClear}
            type="reset"
          />
        </div>
        {this.state.formErrors.validatedForm ? (
          <FormConfirm confirm={this.state.formErrors} />
        ) : (
          ""
        )}
      </form>
    );
  }
}
export default Form;
