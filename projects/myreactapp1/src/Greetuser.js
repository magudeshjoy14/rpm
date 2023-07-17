import React, { Component } from 'react'

export default class Greetuser extends Component {
  constructor() {
    super();
    this.state = { userName: '' };
  }
  doGreetings = (event) => {
    this.setState({ userNmae: event.target.value });
  };
  submitFormHandler = () => {
      alert("Form submitted with data" + this.state.userName);
  }
  render() {
    let result ='';
    if (this.state.userName) {
      <h1>Hello {this.state.userName}</h1>
    } else {
      result = '';
    }
    return (
      <div>
        {result}
        <form onSubmit={this.submitFormHandler}>
          <p>Enter your name:</p>
          <input type="text" onChange={this.doGreetings} />
          <input type='submit' value="submit"></input>
        </form>
        <div>{result}</div>
      </div>
    )
  }
}
