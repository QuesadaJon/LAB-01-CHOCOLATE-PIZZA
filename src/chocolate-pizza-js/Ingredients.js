import React, { Component } from 'react'
import IngredientsListLeft from './IngredientsListLeft'
import IngredientsListRight from './IngredientsListRight'

export default class Ingredients extends Component {
    render() {
        return (
            <div className="list-background">
                <IngredientsListLeft/>
                <IngredientsListRight/>
            </div>
        )
    }
}
