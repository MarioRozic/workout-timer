import React, { Component } from "react";
import "./App.css";
import Song from "./fire_bow.mp3";

class App extends Component {
  state = {
    start: 1,
    rest: 1,
    isResting: false
  };

  componentDidMount = () => {
    this.startStart();
  };

  startStart = () => {
    this.timerInterval = setInterval(() => {
      console.log("Start");
      this.setState({ start: this.state.start + 1 }, () => {
        if (this.state.start === parseInt(this.props.workoutTime) + 1) {
          console.log("Claer Start");
          clearInterval(this.timerInterval);
          this.setState({ isResting: true, start: 1 });
          this.startRest();
        }
      });
    }, 1000);
  };

  startRest = () => {
    this.restInterval = setInterval(() => {
      console.log("Rest");
      this.setState({ rest: this.state.rest + 1 }, () => {
        if (this.state.rest === parseInt(this.props.restTime) + 1) {
          console.log("Claer Rest");
          clearInterval(this.restInterval);
          this.setState({ isResting: false, rest: 1 });
          this.startStart();
        }
      });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerInterval);
    clearInterval(this.restInterval);
  };

  render() {
    let { start, rest, isResting } = this.state;

    let startScreen = (
      <div className="Screen green" onClick={this.props.handlerClose}>
        <audio src={Song} controls={false} autoPlay />
        <span>{start}</span>
      </div>
    );

    let restScreen = (
      <div className="Screen red" onClick={this.props.handlerClose}>
        <audio src={Song} controls={false} autoPlay />
        <span>{rest}</span>
      </div>
    );

    let workoutScreen = isResting ? restScreen : startScreen;
    return <div className="App">{workoutScreen}</div>;
  }
}

export default App;
