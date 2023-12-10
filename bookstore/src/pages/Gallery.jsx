import { useState, useEffect } from "react";
import { fetchData } from "../api/ApiBooks";
import styles from "../styles/product.module.css";
import Layout from "../components/layout";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import { Button, Card, Col, Row } from "react-bootstrap";

const Gallery = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();
  //check the console favorite books from the click event
  console.log("favorites are", favorites);
  //function to change the button to removefavorites.
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchData();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Books Gallery</h1>
        <Row xs={1} md={2} lg={4} className={styles.row}>
          {books.map((book) => (
            <Col key={book.id} className="mb-5 mt-5">
              <Card className={`${styles.card} ${styles.smallCard}`}>
                <Card.Img
                  variant="top"
                  src={book.image_url}
                  alt={book.title}
                  onClick={() => navigate(`/books/${book.id}`)}
                  style={{
                    width: "100%",
                    height: "fix",
                    display: "block",
                    margin: "auto",
                  }}
                />

                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Book Rating: {book.rating}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      favoritesChecker(book.id)
                        ? removeFromFavorites(book.id)
                        : addToFavorites(book)
                    }
                  >
                    {favoritesChecker(book.id)
                      ? "Remove from Reading List"
                      : "Add to Reading List"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
};

export default Gallery;

//   return (
//     <Layout>
//       <div>
//         <h1 className={styles.tittle}>Books Gallery</h1>
//         <div className={styles.items}>
//           {" "}
//           {books.map((book) => (
//             <div key={book.id} className={styles.item}>
//               {" "}
//               <img
//                 className={styles.img}
//                 src={book.image_url}
//                 alt={book.title}
//                 onClick={() => navigate(`/books/${book.id}`)}
//               />
//               <div>{book.title}</div>
//               <div>
//                 <p>Book Rating</p>
//                 {book.rating}
//               </div>
//               <div>
//                 {favoritesChecker(book.id) ? (
//                   <button onClick={() => removeFromFavorites(book.id)}>
//                     Remove from Reading List
//                   </button>
//                 ) : (
//                   <button onClick={() => addToFavorites(book)}>
//                     Add to Reading List
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Gallery;
