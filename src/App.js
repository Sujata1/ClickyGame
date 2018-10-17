import React from "react";

import Jumbotron from "./components/Jumbotron/Jumbotron";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper";
import ClickyCard from "./components/ClickyCard/ClickyCard";
import Container from "./components/Grid/Container";
import clicky from "./clicky.json";
import "./App.css";


class App extends React.Component {
  state = {
    clickyList: clicky,
    clicked: [],
    count: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };



  ifClicked = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({ count: 0, clicked: [], message: "You Guessed Incorrectly" });
    }
    else {
      this.state.clicked.push(id);
      this.setState({ clickyList: this.shuffle(this.state.clickyList), count: this.state.count + 1, message: "You Guessed Correctly" });
      if ((this.state.count + 1) > this.state.topScore) {

        this.setState({ topScore: this.state.count + 1 });
      }
    }
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    return (
      <div>
        <NavBar>
          <ul><li className="brand">
            <a href="/">Clicky Game</a></li><li className="">{this.state.message}</li><li>Score: {this.state.count} | Top Score: {this.state.topScore}</li></ul>
        </NavBar>

        <Jumbotron>
          <h1>Clicky Game!
             </h1>
          <h2>
            Click on an image to earn points, but don't click on any more than once!
          </h2>
        </Jumbotron>
        <Container>
          <Wrapper>
            {this.state.clickyList.map(clicky => (
              <ClickyCard
                ifClicked={this.ifClicked}
                name={clicky.name}
                key={clicky.id}
                id={clicky.id}
                image={clicky.image}
              />
            ))}
          </Wrapper>
        </Container>
      </div>
    );
  }
}
export default App;
