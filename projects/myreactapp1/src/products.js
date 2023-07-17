import React, { Component } from 'react'

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                { name: 'android phone', price: 1000 },
                { name: 'laptop', price: 100 },
                { name: 'bottle', price: 500 },
                { name: 'book', price: 1000 },
                { name: 'ball', price: 100 },
                { name: 'bat', price: 10000 },
                { name: 'tv', price: 20000 }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.state.products.map(
                            (item) => (
                                <div><h2>{item.name}:{item.price}</h2></div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}