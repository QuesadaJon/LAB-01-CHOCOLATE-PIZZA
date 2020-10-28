import React, { Component } from 'react'
import IngredientsListLeft from './IngredientsListLeft'

import { data } from './data';

export default class Ingredients extends Component {
    render() {

        return (
            <div className="list-background"> {
                data.map(item => {
                    return <IngredientsListLeft
                        one={item.amount} two={item.name} />
                })
            }
            </div>
        )
    }
}
