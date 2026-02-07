import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";

function BlogPost() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px" }}>
      <BlogHeader title="Understanding React Components" author="Rajalakshmi" />
      <BlogContent />
      <BlogFooter />
    </div>
  );
}

export default BlogPost;
