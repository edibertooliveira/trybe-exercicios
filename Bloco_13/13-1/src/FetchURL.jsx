import React, { Component } from "react";

class FetchURL extends Component {
  constructor(props) {
    super(props);
    this.getFetchFromDog = this.getFetchFromDog.bind(this);
    this.handlePropFromChange = this.handlePropFromChange.bind(this);

    this.state = {
      url: "",
      nameDog: "",
      loading: true,
    };
  }

  async getFetchFromDog() {
    this.setState({
      loading: true,
    });
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json();
    if (data.message.includes("terrier")) {
      return this.getFetchFromDog();
    }

    const species = data.message.split("/")[4];
    this.setState({
      url: data,
      species,
      loading: false,
    });
  }

  handlePropFromChange(event) {
    const { value } = event.target;
    this.setState({
      nameDog: value,
    });
  }

  componentDidUpdate() {
    localStorage.setItem("dog", this.state.url.message);
  }

  componentDidMount() {
    this.getFetchFromDog();
  }

  render() {
    const setLoading = <span>Loading...</span>;
    return (
      <main>
        {this.state.loading ? (
          setLoading
        ) : (
          <div>
            <img
              src={this.state.url.message}
              alt="foto de cachorro!"
              height="400px"
            />
            <div>{this.state.species}</div>
            <div>
              <button type="button" onClick={this.getFetchFromDog}>
                FETCH!
              </button>
            </div>
          </div>
        )}
        <br />
        <legend>Edite nome do doguinho:</legend>
        <input type="text" name="name" onChange={this.handlePropFromChange} />
        <div>{this.state.nameDog}</div>
      </main>
    );
  }
}

export default FetchURL;
