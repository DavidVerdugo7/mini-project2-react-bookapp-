import { Link } from "react-router-dom";
import "../styles/nav.bar.css";
import Nav from "react-bootstrap/Nav";

import { LinkContainer } from "react-router-bootstrap"; // Necesario para enlaces con react-router

export default function NavBar() {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/"
      className="mb-5  justify-content-center"
    >
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/create">
        <Nav.Link>Create</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/gallery">
        <Nav.Link>Gallery</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/BooksToRead">
        <Nav.Link>Reading List</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}
