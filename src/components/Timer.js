// import Countdown from 'react-countdown';

 
// // Random component
// const Completionist = () => <span>You are good to go!</span>;

// function Timer() {
//     return (
     
//     <Countdown autoStart={false} date={Date.now() + 20000}>
//       <Completionist />
//     </Countdown>
    
//   )
// }

// export default Timer

import React from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

class Timer extends React.Component {
    render() {
        return (
            <div className="timer">
                <CountdownCircleTimer
                    isPlaying= {this.props.start}
                    duration={20}
                    colors={[
                    ['#41B3A3', 0.33],
                    ['#E8A87C', 0.33],
                    ['#C38D9E', 0.33],
                    ['#F5FFFA',0],
                    ]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
        )
    }
}
 
export default Timer