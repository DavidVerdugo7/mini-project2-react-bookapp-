// import { Link } from "react-router-dom";
import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      <h1>📚 Books Saved </h1>

      <div className="books-container">
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
