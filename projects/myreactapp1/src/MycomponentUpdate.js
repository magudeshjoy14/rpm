import React, { Component } from 'react'

export default class MycomponentUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = { myHero: "My sweet Mother" }
    }
    changeSuperHero = () => {

        this.setState({ myHero: "Myfather" })
    }

    shouldComponentUpdate() {
        return true;
    }
    render() {
        console.log('render called');
        return (
            <div>
                <h1>{this.state.myHero}</h1>
                <button type="button" onClick={this.changeSuperHero}> Button for change</button>
            </div>
        )
    }
    componentDidMount() {

        setTimeout(() => {
            this.setState({ myHero: "Timedelay change to My Mother" })
        }, 3000)
    }
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        
            document.getElementsById("div1").innerHTML = "Before the update, myHero was" + prevstate.myHero;
        
    }
    componentDidUpdate() {
    
            document.getElementsById("div2").innerHTML = "The updated myHero is" + this.state.myHero;
        
    }
}

