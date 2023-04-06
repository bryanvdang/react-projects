import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81A5jQHA+lL._AC_UL320_.jpg"
    alt="The subtle art of not giving a f*ck"
  />
);
const Title = () => {
  return <h2>The Subtle Art of not giving a F*ck</h2>;
};
const Author = () => {
  return <h2>Mark Manson</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
