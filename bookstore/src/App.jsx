// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globalStyles.css";
import Index from "./pages/Index";
import Create from "./pages/create";
import View from "./pages/view";
import Gallery from "./pages/Gallery";
import Store from "./store/store";
import BooksToRead from "./pages/booksToRead";
import BookDetails from "./pages/BookDetails";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider breakpoints={["lg", "md", "sm", "xs"]}>
        <Store>
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="create" element={<Create />} />
                <Route path="view/:bookId" element={<View />} />
                <Route path="books/:id" element={<BookDetails />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="booksToRead" element={<BooksToRead />} />
              </Routes>
            </div>
          </BrowserRouter>
        </Store>
      </ThemeProvider>
    </>
  );
}

export default App;
