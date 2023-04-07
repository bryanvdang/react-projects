import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const image = "./images/artOfGiving.jpg";
const title = "The Subtle Art of not giving a F*ck";
const author = "Mark Manson";

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} image={image} />
      <Book author={author} title={title} image={image} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
