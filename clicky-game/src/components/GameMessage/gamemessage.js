import React from "react";
import "./gamemessage.css";

class GameMessage extends Component {

        state = {
            animating: false,
            message: ""
        }

        //function runs on every state change
        componentDidUpdate (prevProps) {

            let newState = {
                animating: true
            }

            //desconstructs score and topScore from previous state
            const {score, topScore} = prevProps

            if (score === 0 && topScore === 0) {
                newState.message = "";
                
            }else if (score !== 0 && topScore > 0) {
                newState.message = "correct";
            }else {
                newState.message = "incorrect";
            }

            if (score !== this.props.score || this.state.message !== newState.message) {
                this.setState(newState);
            }
        }
}