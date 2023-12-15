import ReactDom from "react-dom/client";
import "./index.css";
import { getByTitle } from "@testing-library/react";
import { books } from "./books"
import Book from "./Book";
 

const print = console.log;
const BookList = () => {

  return (
    <>
    <h1>Amazon Best sellers</h1>
    <section className="booklist">
      {books.map((value) => {
        // console.log(value.id);
        return <Book {...value} key={value.id} />;
      })}
    </section>
    </>
  );
};



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
