import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    image: "./images/artOfGiving.jpg",
    title: "The Subtle Art of not giving a F*ck",
    author: "Mark Manson",
  },
  {
    image: "./images/youAreBadass.jpg",
    title: "You are a Badass",
    author: "Jen Sincero",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { image, title, author } = book;
        return <Book image={image} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = ({ image, title, author }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
