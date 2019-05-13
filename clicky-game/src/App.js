import { React, Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import data from "./data.json";
import "./App.css";


class App extends Component {
  state = {
    data,
    clickedData: [],
    score: 0
      };


  imageClick = event => {
    const currentData = event.target.alt;
    const DataAlreadyClicked =
      this.state.clickedData.indexOf(currentData) > -1;


    if (DataAlreadyClicked) {
      this.setState({
        data: this.state.data.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedData: [],
        score: 0
      });
        alert("You already selected this! You lose. Play again?");


    } else {
      this.setState(
        {
          data: this.state.data.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedData: this.state.clickedData.concat(
            currentData
          ),
          score: this.state.score + 1
        },
       
        () => {
          if (this.state.score === 12) {
            alert("Nice job! You Win!");
            this.setState({
              data: this.state.data.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedData: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.data.map(data => (
            <FriendCard
              imageClick={this.imageClick}
              id={data.id}
              key={data.id}
              image={data.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;