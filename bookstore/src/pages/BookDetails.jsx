import React, { useEffect } from "react";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { BOOKDETAIL_URL } from "../api/ApiBooks";
import { Card, ListGroup } from "react-bootstrap";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${BOOKDETAIL_URL}/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        } else {
          throw new Error("Failed to fetch book details");
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBookDetails();
  }, [id]);

  return (
    <Layout>
      <Card style={{ width: "40rem" }}>
        {book?.image_url && (
          <Card.Img
            variant="top"
            src={book.image_url}
            className=""
            style={{
              maxWidth: "300px",
              height: "auto",
              justifyContent: "center",
              margin: "0 auto",
              display: "block",
            }}
          />
        )}
        <Card.Body>
          <Card.Title>{book?.tittle}</Card.Title>
          <Card.Text>
            <h2>Description 📜</h2>
            <p>{book?.description}</p>
            <h2>Authors ✍️</h2>
            <p>{book?.authors}</p>
            <h2>Genres ⚔️</h2>
            <p>{book?.genres}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default BookDetails;
