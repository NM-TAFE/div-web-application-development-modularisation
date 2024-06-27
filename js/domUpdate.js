import { Post } from "./post.js";

function addPost(title, content) {
  const postContainer = document.getElementById("postContainer");
  const post = new Post(title, content);
  postContainer.appendChild(post.createPostElement());
}

function addBooks(books) {
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  const bookList = document.createElement("ul");
  bookList.id = "list";

  books.forEach(function (book) {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    bookList.appendChild(listItem);
  });

  sidebar.appendChild(bookList);
  const container = document.querySelector(".container");
  container.appendChild(sidebar);
}

export { addPost, addBooks };
