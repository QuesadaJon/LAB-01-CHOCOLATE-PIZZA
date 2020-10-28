import React, { Component } from 'react'
import IngredientsListLeft from './IngredientsListLeft'
import IngredientsListRight from './IngredientsListRight'

export default class Ingredients extends Component {
    render() {
        return (
            <div className="list-background">
                <div className="ingredients-left">
                    <IngredientsListLeft name={['milk', 'mascarpone', 'pink salt', 'Black Mission Figs', 'brown sugar', 'water']} amount={['1 1/2 cups', '1/2 cup', '1/2 tsp', '1 lb', '1/2 cup', '2-4 tbsp']} />
                </div>
                <div className="ingredients-right">
                    <IngredientsListRight name={['heavy cream', 'granulated sugar', 'egg yolks', 'lemon, juiced', 'butter', 'honeyroasted pecans, roughly chopped']} amount={['1 1/2 cups', '1/3', '2', '1', '2 tbsp', '1 cup']}/>
                </div>
            </div>
        )
    }
}
