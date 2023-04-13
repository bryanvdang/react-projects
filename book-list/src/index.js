import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    image: "./images/sherlockHolmes.jpg",
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    id: 1,
  },
  {
    image: "./images/youAreBadass.jpg",
    title: "You are a Badass",
    author: "Jen Sincero",
    id: 2,
  },
  {
    image: "./images/limitless.jpg",
    title: "Limitless",
    author: "Jim Kwik",
    id: 3,
  },
  {
    image: "./images/hatchet.jpg",
    title: "Hatchet",
    author: "Gary Paulsen",
    id: 4,
  },
  {
    image: "./images/cantHurtMe.jpg",
    title: "Can't Hurt Me",
    author: "David Goggins",
    id: 7,
  },
  {
    image: "./images/theAlchemist.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    id: 5,
  },
  {
    image: "./images/fake.jpg",
    title: "Fake",
    author: "Robert Kiyosaki",
    id: 10,
  },
  {
    image: "./images/grit.jpg",
    title: "Grit",
    author: "Angela Duckworth",
    id: 8,
  },
  {
    image: "./images/neverSplitTheDifference.jpg",
    title: "Never Split the Difference",
    author: "Chris Voss",
    id: 6,
  },
  {
    image: "./images/crushingIt.jpg",
    title: "Crushing It",
    author: "Gary Vaynerchuk",
    id: 9,
  },
  {
    image: "./images/mansSearchForMeaning.jpg",
    title: "Man's Search for Meaning",
    author: "Mark Manson",
    id: 11,
  },
  {
    image: "./images/thingsNotSeen.jpg",
    title: "Things Not Seen",
    author: "Andrew Clements",
    id: 12,
  },
];

function BookList() {
  return (
    <div>
      <h1 className="header">Bryan's Book List</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </div>
  );
}

const Book = ({ image, title, author }) => {
  return (
    <div>
      <article className="book">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </article>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
