import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  select = (table, column) => {
    axios
      .get("http://localhost:3000/select", {
        params: { table: table, column: column }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        Table
        <input
          onChange={e => {
            this.setState({ table: e.target.value }, () => {
              console.log(this.state);
            });
          }}
        />
        <br />
        Column
        <input
          onChange={e => {
            this.setState({ column: e.target.value }, () => {
              console.log(this.state);
            });
          }}
        />
        <br />
        <button
          onClick={() => {
            this.select(this.state.table, this.state.column);
          }}
        >
          SELECT
        </button>
      </div>
    );
  }
}

export default App;
