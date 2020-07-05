import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import './../WebPages/Styles.css';


const Styles = styled.div`
  .navbar { background-color: #114B5F; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #E4FDE1;
    height: 80px;
    font-size: 20px;
    padding: 13px;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #E4FDE1;
    align-self: center;
    padding: 9px;
    font-size: 36px;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Peregrine</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">WhiteList</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/blacklist">BlackList</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/settings">Settings</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)