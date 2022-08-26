import React, { Component } from "react";

export default class App extends Component {
  beer = () => {
    return <h4>Tentando de todas as formas aprender React.</h4>;
  };
  dobro = (number) => {
    return number * 5;
  };

  render() {
    return (
      <>
        <h1>{this.beer()}</h1>
        <h2>{this.dobro(10)}</h2>
      </>
    );
  }
}
