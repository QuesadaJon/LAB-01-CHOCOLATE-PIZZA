import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="title">
                        Chocolate Pizza
                    </div>
                    <div className="sub-title">
                        POSTED ON 15 DEC 2013/DESSERTS
                    </div>
                </div>
                <div className="print-icon">
                    <img src="/assets/print-icon.png" alt='print'/>
                </div>
            </div>
        )
    }
}
