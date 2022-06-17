import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Interval from "./component/lifecycle";

const styleImg = { width: 400, height:430 };

class App extends React.Component {
  state = {
    shows: false,
    fullName: "Kelechi Precious Nwachukwu",
    bio:
      "loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: (
      <img src="/ProfileImg.jpg" alt="" style={styleImg} />
    ),
    profession: "FullStack Developer",
  };


  render() {
    const buttonMsg = this.state.shows ? "Hide Profile" : "Show Profile";

    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Profile.state</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="Helpful Documentation" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://www.youtube.com/watch?v=3wvdq_j5S1c">
                  How to Conditionally Render Components in React.js - Part 7
                </NavDropdown.Item>
                <NavDropdown.Item href="https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks">
                  setInterval in React Components Using Hooks
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="title">
          <h1>Profile:</h1>
        </div>
        {this.state.shows ? (
          <div className="profileElements">
            <h1>{this.state.fullName}</h1>
            <p>
              <b>Bio:</b>
              <br />
              {this.state.bio}
            </p>
            <div>{this.state.imgSrc}</div>
            <h3>{this.state.profession}</h3>
          </div>
        ) : null}
        <button onClick={() => this.setState({ shows: !this.state.shows })}>
          {buttonMsg}
        </button>
        <Interval />
      </div>
    );
  }
}
export default App;