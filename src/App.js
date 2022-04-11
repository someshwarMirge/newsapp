
import './App.css';
import News from './Components/News';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <News/>
      </>
    )
  }
}

