import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  componentDidMount() {}

  select = (table) => {
    axios
      .get("http://localhost:3000/select", {params : {table:table}})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return <div>Hello<button onClick={()=>{this.select('cats')}}>SELECT</button></div>;
  }
}

export default App;
