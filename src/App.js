import React, { Component } from 'react';
import Main from './components/main';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar className="navbar">
        <Navbar.Header>
          <Navbar.Brand >
            <Link to="/portfolio" className="brandname" style={{color : 'white'}}> Tilak Sharma</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to="/aboutme" className="nav-link">About Me</Link>
            </NavItem>
            <NavItem>
              <Link to="/resume" className="nav-link">Resume</Link>
            </NavItem>
            <NavItem>
              <Link to="/projects" className="nav-link">Projects</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="content">
      <Main/>
      </div>
      </div>
    );
  }
}

export default App;
