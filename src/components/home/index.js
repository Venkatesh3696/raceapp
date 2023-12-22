import { Component } from "react";

import Participant from "../participant";

import "./index.css";

class Home extends Component {
  state = {
    name: "",
    speed: "",
    startTime: "",
    listOfParticipants: [
      { name: "Usain Bolt", speed: 60 },
      { name: "PT Usha", speed: 40 },
    ],
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeSpeed = (event) => {
    this.setState({ speed: event.target.value });
  };

  onChangeTime = (event) => {
    this.setState({ startTime: event.target.value });
  };

  onAddRuner = (event) => {
    event.preventDefault();
    const { name, speed, startTime } = this.state;

    const { listOfParticipants } = this.state;
    const newParticipant = { name, speed, startTime };
    const newList = [...listOfParticipants, newParticipant];
    this.setState({
      listOfParticipants: newList,
      name: "",
      speed: "",
      startTime: "",
    });
  };

  render() {
    const { name, speed, startTime, listOfParticipants } = this.state;
    return (
      <div className="home-container">
        <div className="registration-container">
          <h1>RUNNER DETAILS</h1>
          <p className="para-1">*You can add max 10 participants</p>
          <form className="inputs-container">
            <label className="input-label" htmlFor="name-input">
              Name
            </label>
            <input
              onChange={this.onChangeName}
              value={name}
              className="text-input"
              id="name-input"
            />
            <label className="input-label" htmlFor="speed-input">
              Speed
            </label>
            <input
              onChange={this.onChangeSpeed}
              value={speed}
              className="text-input"
              id="speed-input"
            />
            <label className="input-label" htmlFor="time-input">
              Start Time
            </label>
            <input
              onChange={this.onChangeTime}
              value={startTime}
              className="text-input"
              id="time-input"
            />
            <button
              type="submit"
              onClick={this.onAddRuner}
              className="add-button"
            >
              + ADD RUNNER
            </button>
          </form>
        </div>
        <div className="participants-container">
          <h1>LIST OF PARTICIPANTS</h1>
          <div className="headings-container">
            <p className="heading">Name</p>
            <p className="heading">Speed</p>
            <p className="heading">Start Time</p>
            <p className="heading">End Time</p>
          </div>

          <ul className="list-container">
            {listOfParticipants.map((each) => (
              <Participant key={each.name} details={each} />
            ))}
          </ul>
          <div className="bottom-container">
            <button className="start-button">Start Race</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
