class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  createPostElement() {
    const post = document.createElement("div");
    post.className = "post";

    const postTitle = document.createElement("h3");
    postTitle.textContent = this.title;

    const postContent = document.createElement("p");
    postContent.textContent = this.content;

    post.appendChild(postTitle);
    post.appendChild(postContent);

    return post;
  }
}

export { Post };
