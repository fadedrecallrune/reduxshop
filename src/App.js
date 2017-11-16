import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";
import { Route } from "react-router-dom";

import ProductList from "./containers/ProductList";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Divider />
        <Container textAlign="center">
          <h1> Redux Shop </h1>
        </Container>
        <Divider />
        <Container textAlign="center">
          <Route path="/" render={props => <ProductList {...props} />} />
        </Container>
      </div>
    );
  }
}

export default App;
