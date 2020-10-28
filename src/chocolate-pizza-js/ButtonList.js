import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div className="header-right">
                <div className="icons-one">
                    <img src="assets/icons-folder/fb-icon.png" alt="fb-icon"/>
                    <img src="assets/icons-folder/twit-icon.png" alt="twit-icon"/>
                    <img src="assets/icons-folder/gp-icon.png" alt="gp-icon"/>
                    <img src="assets/icons-folder/insta-icon.png" alt="insta-icon"/>
                    <img src="assets/icons-folder/flic-icon.png" alt="flic-icon"/>
                    <img src="assets/icons-folder/pint-icon.png" alt="pint-icon"/>
                </div>
                <div className="icons-two">
                    <img src="assets/icons-folder/rss-icon.png" alt="rss-icon"/>
                    <img src="assets/icons-folder/mail-icon.png" alt="mail-icon"/>
                </div>
            </div>
        )
    }
}
