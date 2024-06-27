import { Post } from "./post.js";

function addPost(title, content) {
  const postContainer = document.getElementById("postContainer");
  const post = new Post(title, content);
  postContainer.appendChild(post.createPostElement());
}

function addBooks(books) {
  const booksContainer = document.createElement("aside");
  booksContainer.className = "section subtitle is-5 has-text-primary";

  const bookList = document.createElement("ul");
  bookList.id = "list";

  books.forEach(function (book) {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    bookList.appendChild(listItem);
  });

  booksContainer.appendChild(bookList);
  const container = document.querySelector(".container");
  container.appendChild(booksContainer);
}

export { addPost, addBooks };
