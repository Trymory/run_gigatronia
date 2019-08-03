import React, { Component } from "react";

class HomeScreen extends Component {

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <h1>Welcome to Run Gigatronia this is a git test</h1>
    );
  }
}

export default HomeScreen;
