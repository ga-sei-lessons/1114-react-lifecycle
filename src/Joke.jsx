import React, { Component } from 'react'
import axios from 'axios'

export default class Joke extends Component {
    state = {
        joke: ''
    }

    // use a componentDidMount if you need to display API data on page load
    async componentDidMount() {
        this.handleGetJoke()
        // ping the dad joke api
        // const options = {
        //     headers: {
        //         Accept: 'application/json'
        //     }
        // }
        // const url = 'https://icanhazdadjoke.com'
        // try {
        //     const response = await axios.get(url, options)
        //     this.setState({
        //         joke: response.data.joke
        //     })
        // } catch (err) {
        //     console.log(err)
        // }

        // fetch(url, options)
        //     .then(response => response.json())
        //     .then(jokeData => {
        //         console.log(jokeData)
        //         this.setState({
        //             joke: jokeData.joke
        //         })
        //     })
        //     .catch(err => console.log(err))

    }

    handleGetJoke = async () => {
        try {
            const options = {
                headers: {
                    Accept: 'application/json'
                }
            }

            const url = 'https://icanhazdadjoke.com'

            const response = await axios.get(url, options)

            this.setState({
                joke: response.data.joke
            })
        } catch (err) {
            console.warn(err)
        }
    }

    render() {
        return (
            <>
                <h2>Dad Joke Component</h2>

                <h3>Here is your joke:</h3>

                <p>{this.state.joke}</p>

                <button
                    onClick={this.handleGetJoke}
                >
                    Give me a better joke
                </button>
            </>
        )
    }
}