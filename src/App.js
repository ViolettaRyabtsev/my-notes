import "./App.css";
import React from "react";
import axios from "axios";

import SideNotes from "./sideNotes";

import TopBar from "./TopBar.js";

const generateUniqueId = require("generate-unique-id");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      body: "",
    };
  }

  addNote = () => {
    const newArr = [];
    newArr.slice(this.state.notes);

    const newNote = {
      title: this.state.title,
      body: this.state.body,
      id: generateUniqueId({
        length: 32,
        useLetters: false,
      }),
    };

    newArr.push(newNote);
    this.setState({
      notes: newArr,
    });

    axios.post(`http://localhost:5000/`, newNote).then((res) => {
      console.log(res);
      console.log(res.data, "after post to server");
    });
    console.log(newNote);
  };

  // componentDidMount=()=>{
  //   axios.post(`http://localhost:5000/`,  ).then((res) => {
  //     console.log(res);
  //     console.log(res.data, "after post to server");
  //   });

  //   axios.get(`http://localhost:5000/`).then((res) => {
  //     const persons = res.data;
  //     console.log(persons, "did i get ?");
  //   });

  // }
  render() {
    console.log(this.state.notes);
    return (
      <div className="main-page">
        <TopBar />
        <div className="note-app">
          <SideNotes notes={this.state.notes} />
          <div className="Main-notes">
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
            <textarea
              id="body"
              value={this.state.body}
              onChange={(e) => {
                this.setState({
                  body: e.target.value,
                });
              }}
              placeholder="right your note"
            />
            <button onClick={this.addNote}>add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
