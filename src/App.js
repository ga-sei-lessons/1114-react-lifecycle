import React, { Component } from 'react'
import Timer from './Timer'
import Joke from './Joke'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Component Lifecycle Examples</h1>

        <Timer />

        <Joke />
      </div>
    )
  }
}
