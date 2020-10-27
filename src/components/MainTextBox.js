import React from "react"
import Paragraph from "./Paragraph"
import Timer from './Timer';

class MainTextBox extends React.Component {
    constructor() {
        super()
        this.state = {
            isActive: false,
            isDone: false
        }
        this.handleActive = this.handleActive.bind(this)
        this.handleDone = this.handleDone(this)
    }

    handleActive() {
        this.setState({isActive: true})
    }

    handleDone() {
        this.setState({isDone: true})
    }

    render() {
        
        return (
            <div>
            <Timer start={this.state.isActive}/>
            <Paragraph />
            <form className="mainText">
            <textarea onFocus={this.handleActive} disabled={this.isDone} placeholder="Type the above sentence to test your accuracy (Timer starts as soon as you start typing)">
            </textarea><br></br>
            <button>Click Here To See Results</button>
            </form>
            </div>
        )
    }
}

export default MainTextBox