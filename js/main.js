import {
  handleClickMeButton,
  handleHoverButton,
  handleDoubleClickButton,
} from "./eventHandlers.js";
import { addPost, addBooks } from "./domManipulation.js";

function initializeApp() {
  handleClickMeButton();
  handleHoverButton();
  handleDoubleClickButton();

  // Add some sample posts
  addPost("First Post", "This is the content of the first post.");
  addPost("Second Post", "This is the content of the second post.");

  // Add some sample books
  const books = ["Harry Potter I", "Harry Potter II", "Harry Potter III"];
  addBooks(books);
}

document.addEventListener("DOMContentLoaded", initializeApp);
