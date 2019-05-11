import React, { Component } from "react";
import Container from "../Container";
import GameCard from "../GameCard";
import Instructions from "../Instructions";
import Header from "../Header";
import Footer from "../Footer";
import data from  "../../data";

class Game extends Component {

    state = {
        data,
        score: 0,
        topScore: 0,
        message: "Click as many images as you can without repeating"

    };

    componentDidMount () {
        this.setState({data: this.shuffleDeck(this.state.data) });

        //Shuffle the imported data array in random order
        shuffleDeck = data => {
            let newData = data.sort(function(a,b){return 0.5 - Math.random()});
            return newData;

        };

        //resets all the click properties to false
        resetDeck = data => {
            const resetData = data.map(item => ({ ...item, clicked: false}));

            return this.shuffleDeck(resetData);

        };

        correctGuess = newData => {
            let newScore = this.state.score;
            newScore++
            let newTopScore = Math.max(newScore, this.state.topScore);

            this.setState({
                data: this.shuffleDeck(newData),
                score: newScore,
                topScore: newTopScore,
                animation: "animated swing"
            })
        }

        wrongGuess = newData => {
            this.setState({
                data: this.reseetDeck(newData),
                score: 0
            })
        }

        gameCardClick = id => {
            
        }
    }
}
