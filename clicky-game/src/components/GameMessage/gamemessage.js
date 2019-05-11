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

        renderMessage = () => {
            switch (this.state.message) {
                case "correct":
                 return "You guessed correctly!";
                case "incorrect":
                    return "You guessed incorrectly!";
                default:
                    return "Click a character to begin!";
            }
        };

        //add animation class when animateClass state updates
        addAnimation = () => {
            switch (this.state.message) {
                case "correct":
                    return "animated pulse";
                case "incorrect":
                    return "animated wobble";
                default:
                    return "";
            }
        }

        render() {
                return(
                    <li
                        className={'
                            gameMessage: 
                            ${this.state.animating? this.addAnimation(): ""}
                            ${this.state.animating? this.state.message: "black"}              
                        '}
                        id={'${this.state.message}'}
                        onAnimationEnd={() => this.setState({ animating: false})}
                      >
                      {this.renderMessage()}  
                      </li>
                );
        }
}

export default GameMessage;