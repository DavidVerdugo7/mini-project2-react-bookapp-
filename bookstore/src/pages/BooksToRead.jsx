import React from "react";
import Layout from "../components/layout";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/product.module.css";
import { Card, Button, Col, Row } from "react-bootstrap";

export default function BooksToRead() {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  //check the console favorite books from the click event
  console.log("favorites are", favorites);
  //function to change the button to removefavorites.
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return (
    <Layout>
      <Row xs={1} md={2} lg={3} className="g-2">
        {favorites.length > 0 ? (
          favorites.map((book) => (
            <Col key={book.id}>
              <Card className={styles.item}>
                {book.image_url && (
                  <Card.Img
                    variant="top"
                    src={book.image_url}
                    style={{
                      width: "100%",
                      height: "fix",
                      display: "block",
                      margin: "auto",
                    }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Book Rating: {book.rating}</Card.Text>
                  {favoritesChecker(book.id) ? (
                    <Button
                      variant="danger"
                      onClick={() => removeFromFavorites(book.id)}
                    >
                      Remove from Reading List
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => addToFavorites(book)}
                    >
                      Add to Reading List
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center ">
            <h1>No books added</h1>
          </Col>
        )}
      </Row>
    </Layout>
  );
}
