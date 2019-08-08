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
    this.setState({ isSettings: false });
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
            placeholder="sec"
            value={workoutTime}
            onChange={this.handlerInput}
          />
        </div>
        <div className="rest">
          <span>Rest time</span>
          <input
            name="restTime"
            type="number"
            placeholder="sec"
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
          <Timer workoutTime={workoutTime} restTime={restTime} />
        )}
      </div>
    );
  }
}

export default App;
