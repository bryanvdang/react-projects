import tokyo from "./images/tokyo.jpeg";
import osaka from "./images/Osaka.jpeg";
import alaska from "./images/alaska.jpeg";
import vietnam from "./images/Vietnam.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tokyo,
    date: "September 26th, 2023",
    title: "Tokyo Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Japan",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: osaka,
    date: "october 1th, 2020",
    title: "best of Osaka",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    price: "from $2000",
  },
  {
    id: 3,
    image: alaska,
    date: "december 5th, 2023",
    title: "Northern Lights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Alaska",
    duration: "9 days",
    price: "from $1300",
  },
  {
    id: 4,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "8 days",
    price: "from $5000",
  },
];
