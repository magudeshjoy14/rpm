import React, { Component } from 'react';
import Rpm from './Rpm';

class ComponentK extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delComponent = () => {
    this.setState ({ show: false });
  }

  render() {
    let myComponent;
    if (this.state.show) {
      myComponent = <Rpm />;
    };
    return (
      <div>
        {myComponent}
        <button type="button" onClick={this.delComponent}>Delete Component</button>
      </div>
    )
  }
}
export default ComponentK;