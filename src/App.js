import React, { Component } from "react";
import "./App.css";
import Song from "./fire_bow.mp3";

class App extends Component {
  state = {
    start: 1,
    rest: 1,
    isResting: false,
    isSettings: true
  };

  componentDidMount = () => {
    // this.startStart();
  };

  stopTimer = () => {
    console.log("Claer Start");
    clearInterval(this.timerInterval);
  };

  startStart = () => {
    this.timerInterval = setInterval(() => {
      console.log("Start");
      this.setState({ start: this.state.start + 1 }, () => {
        if (this.state.start === 46) {
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
        if (this.state.rest === 16) {
          console.log("Claer Rest");
          clearInterval(this.restInterval);
          this.setState({ isResting: false, rest: 1 });
          this.startStart();
        }
      });
    }, 1000);
  };

  render() {
    let { start, rest, isResting, isSettings } = this.state;

    let settingScreen = (
      <div className="Screen blue">
        <div className="workout">
          <span>Workout time</span>
          <input type="number" />
        </div>
        <div className="rest">
          <span>Rest time</span>
          <input type="number" />
        </div>
        <div className="button">GO</div>
      </div>
    );

    let startScreen = (
      <div className="Screen green">
        <audio src={Song} controls={false} autoPlay />
        <span>{start}</span>
      </div>
    );

    let restScreen = (
      <div className="Screen red">
        <audio src={Song} controls={false} autoPlay />
        <span>{rest}</span>
      </div>
    );

    let workoutScreen = isResting ? restScreen : startScreen;
    return (
      <div className="App">{isSettings ? settingScreen : workoutScreen}</div>
    );
  }
}

export default App;
