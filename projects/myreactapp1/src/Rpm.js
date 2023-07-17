import React, { Component } from 'react'

class Rpm extends Component {
    componentWillUnmount(){
        alert("component is about to be unmounted.");
    }
  render() {
    return (
      <div> I am a component</div>
    )
  };
}

export default Rpm;