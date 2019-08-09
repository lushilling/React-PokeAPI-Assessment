import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Homepage from "./Components/Homepage";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: {}
    };
  }

  addUser = (newUser) => {
    axios.post("http://localhost:8080/poke/addUser", newUser)
      .then(response => {
        this.setState({
          account: response.data,
        })
      });
  }

  render() {
    return (
      <div >
        <Router>

          <Route exact path="/"  render={() => <Homepage addUser={this.addUser} />} />

        </ Router>
      </div >
    )
  }
}
