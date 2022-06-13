import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl 
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">PluckyLooks</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search Product</Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;