import React, { Component } from 'react'
import ChocolatePizzaImg from './ChocolatePizzaImg.js'
import Title from './Title.js'

export default class ImgSection extends Component {
    render() {
        return (
            <div>
                <Title/>
                <ChocolatePizzaImg/>
            </div>
        )
    }
}
