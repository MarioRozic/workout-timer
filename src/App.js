import React, { Component } from "react";
import "./App.css";

import Timer from "./timer";

class App extends Component {
  state = {
    isSettings: true,
    workoutTime: "",
    restTime: ""
  };

  handlerInput = event => {
    console.log("Input handler", event.target.value, event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlerButton = () => {
    console.log("Button handler");
    let { workoutTime, restTime } = this.state;

    if (workoutTime > 0 && restTime > 0) {
      this.setState({ isSettings: false });
    } else {
      alert("Nemere prazno");
    }
  };

  handlerClose = () => {
    this.setState({ isSettings: true });
  };

  render() {
    let { isSettings, workoutTime, restTime } = this.state;

    let settingScreen = (
      <div className="Screen blue">
        <div className="workout">
          <span>Workout time</span>
          <input
            name="workoutTime"
            type="number"
            placeholder="45 sec"
            value={workoutTime}
            onChange={this.handlerInput}
          />
        </div>
        <div className="rest">
          <span>Rest time</span>
          <input
            name="restTime"
            type="number"
            placeholder="5 sec"
            value={restTime}
            onChange={this.handlerInput}
          />
        </div>
        <div className="button" onClick={this.handlerButton}>
          GO
        </div>
      </div>
    );

    return (
      <div className="App">
        {isSettings ? (
          settingScreen
        ) : (
          <Timer
            workoutTime={workoutTime}
            restTime={restTime}
            handlerClose={this.handlerClose}
          />
        )}
      </div>
    );
  }
}

export default App;
