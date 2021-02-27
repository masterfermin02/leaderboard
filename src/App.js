import React, { Component, useEffect, useState } from "react";
import { MDBContainer } from "mdbreact";
import "./index.css";
import Menu from "./Components/Menu";
import Header from "./Components/LeaderBoard/Header";
import CollapsePage from "./Components/CollapsePage";
import CollapseMobile from "./Components/CollapseMobile";
import { get } from "./helpers/fetch";
import AppContext from "./context/AppContext";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      error: null
    };
    //get('/v1/b043df5a')
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    // Where we're fetching data from
    get(`/users`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <MDBContainer >
        <Menu />
        <MDBContainer className="back-ground-page" style={{ paddingTop: 1 }}>
          <Header  />
          <AppContext.Provider value={this.state}>
            <CollapsePage />
            <CollapseMobile />
          </AppContext.Provider>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default App;
