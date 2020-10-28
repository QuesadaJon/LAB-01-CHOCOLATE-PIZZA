import React, { Component } from 'react'
import data from './data'

export default class IngredientsList extends Component {
    render() {
        return (
            <div>
                <p> {this.props.one} {this.props.two}</p>

            </div>
        )
    }
}
