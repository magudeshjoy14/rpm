import React, { Component } from 'react'

export default class Mycomponent extends Component {

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps called');
    }
    constructor() {
        super();
        this.state = { myHero: " My sweet Mother" }
        console.log('constructor called');
    }
    render() {
        console.log('render called');
        return (
            <h2>{this.state.myHero }</h2>
        )
    }
    componentDidMount() {

        setTimeout(() => {
            this.setState({ myHero: " bahubali" })
        }, 3000)
    }
}
