import React, { Component } from 'react'

export default class Timer extends Component {

    state = {
        count: 0,
        // we need to keep track of our setInterval's id so it can be cleared later
        intervalId: null
    }

    // componentDidMount runs when the element 'mount' aka renders for the first time
    // IMPORTANT runs only once
    componentDidMount() {
        // console.log('the timer component has mounted!')
        // here is where you mount things on the window or the document
        // create a setInterval that increments state in a cb function
        const intervalId = setInterval(() => {
            // here we can change the count state
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }, 1000)
        // store that interval's id in state
        this.setState({
            intervalId: intervalId
        })
    }

    // runs everytime the component re-renders
    // runs everytime state changes
    componentDidUpdate() {
        // console.log('the timer component has updated! (state has changed, a re-render has occured)')
        // if you console.log state here, you will always see an accurate representation of state's current values
    }

    // if this component is removed from the virtualDOM tree, this method will run
    componentWillUnmount() {
        // clean up anything you might have mounted on the window or document
        // console.log('the timer component is unmounting')
        clearInterval(this.state.intervalId)
    }

    render() {
        return (
            <>
                <h2>At the tone, the time will be {this.state.count}</h2>
            </>
        )
    }
}