import React, { Component } from 'react'
import Delicious from './Delicous'
import Buttons from './ButtonList'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Delicious/>
                <Buttons/>
            </div>
        )
    }
}
