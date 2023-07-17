import React, { Component } from 'react'

export default class Exampleclass extends Component {
    constructor() {
        super()
        this.state = { count: 0 };
        this.handleEvent=this.handleEvent.bind(this);
    }

    handleEvent() {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>click me{this.state.count}</button>
            </div>
        )
    }
}
