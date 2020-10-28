import React, { Component } from 'react'


export default class IngredientsList extends Component {
    render() {
        return (
            <div>
                <p> {this.props.amount[0]} {this.props.name[0]}</p>
                <p> {this.props.amount[1]} {this.props.name[1]}</p>
                <p> {this.props.amount[2]} {this.props.name[2]}</p>
                <p> {this.props.amount[3]} {this.props.name[3]}</p>
                <p> {this.props.amount[4]} {this.props.name[4]}</p>
                <p> {this.props.amount[5]} {this.props.name[5]}</p>
                <p> {this.props.amount[6]} {this.props.name[6]}</p>
            </div>
        )
    }
}
