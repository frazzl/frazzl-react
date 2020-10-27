import React from "react"

function MainTextBox() {
    return (
        <form className="mainText">
        <textarea placeholder="Type the above sentence to test your accuracy (Timer starts as soon as you start typing)">
        </textarea><br></br>
        <button>Click Here To See Results</button>
        </form>
    )
}

export default MainTextBox