import React, { Component } from 'react'
import Delicious from './Delicous'
import Buttons from './Buttons'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Delicious/>
                <Buttons/>
            </div>
        )
    }
}
