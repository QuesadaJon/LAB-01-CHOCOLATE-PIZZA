import React, { Component } from 'react'
import data from './data'

export default class IngredientsList extends Component {
    render() {
        return (
            <div>
                <p> {this.props.data.amount[0]} {this.props.data.name[0]}</p>
                <p> {this.props.data.amount[1]} {this.props.data.name[1]}</p>
                <p> {this.props.data.amount[2]} {this.props.data.name[2]}</p>
                <p> {this.props.data.amount[3]} {this.props.data.name[3]}</p>
                <p> {this.props.data.amount[4]} {this.props.data.name[4]}</p>
                <p> {this.props.data.amount[5]} {this.props.data.name[5]}</p>
                <p> {this.props.data.amount[6]} {this.props.data.name[6]}</p>
            </div>
        )
    }
}
