import './App.css';
import React, { Component } from 'react'
import Header from './chocolate-pizza-js/Header'
import ImgSection from './chocolate-pizza-js/ImgSection';
import RecipeInstructions from './chocolate-pizza-js/RecipeInstructions';
import Ingredients from './chocolate-pizza-js/Ingredients';
import AboutAuthor from './chocolate-pizza-js/AboutAuthor';
import Footer from './chocolate-pizza-js/Footer'


export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <ImgSection />
        <RecipeInstructions />
        <Ingredients />
        <AboutAuthor />
        <Footer/>
      </div>
    )
  }
}