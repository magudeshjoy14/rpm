import React, { Component } from 'react'
import axios from "axios";

export default class Axios extends Component {
    state = {
        planets: [],
    };
    componentDidMount() {
        axios.get("https://swapi.dev/api/planets/").then((response) =>
            response.jason().then((data) =>
                this.setState({
                    planets: data.results,
                })
            )
        );
    }
    render() {
        return (
            <div>
                {this.state.planets.map((planet, index) => (
                    <div key={index} > {planet.name} </div>
                ))}
            </div>
        );
    }
}
