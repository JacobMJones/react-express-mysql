import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {table:'cats'};
  }
  componentDidMount() {}

  select = (table, column, where, whereDefinition) => {
    axios
      .get("http://localhost:3000/select", {
        params: { table: table, column: column, where:where, whereDefinition:whereDefinition }
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
          value="cats"
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
        Where
        <input
          onChange={e => {
            this.setState({ where: e.target.value }, () => {
              console.log(this.state);
            });
          }}
        /> =  <input
        onChange={e => {
          this.setState({ whereDefinition: e.target.value }, () => {
            console.log(this.state);
          });
        }}
      />
        <br />
        <button
          onClick={() => {
            this.select(this.state.table, this.state.column, this.state.where, this.state.whereDefinition);
          }}
        >
          SELECT
        </button>
      </div>
    );
  }
}

export default App;
