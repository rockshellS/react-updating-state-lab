import React, { Component } from 'react'

class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }


        handleClick = () => {
            this.setState(previousState => {
                return{
                    timesClicked: previousState.timesClicked + 1
                }
            })
        }
        // The component renders out a button with a label that shows the `timesClicked`
        // value.
    render(){
        return(
            <div>      
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }

}

export default DigitalClicker