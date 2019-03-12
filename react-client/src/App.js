import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return <div>Hello</div>;
  }
}

export default App;
