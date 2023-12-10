import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { Card, ListGroup } from "react-bootstrap";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams(); //Hook that return parameters from bookId
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);
  return (
    <Layout>
      <Card style={{ width: "18rem" }}>
        {item?.cover && <Card.Img variant="top" src={item.cover} />}
        <Card.Body>
          <Card.Title>{item?.title}</Card.Title>
          <Card.Text>{item?.intro}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Author: {item?.author}</ListGroup.Item>
          <ListGroup.Item>
            {item?.completed ? "Book completed" : "To complete"}
          </ListGroup.Item>
          <ListGroup.Item>Review: {item?.review}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Layout>
  );
}
