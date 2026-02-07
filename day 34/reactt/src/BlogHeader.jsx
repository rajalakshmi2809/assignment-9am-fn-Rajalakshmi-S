function BlogHeader({ title, author }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>By {author}</p>
    </header>
  );
}

export default BlogHeader;
