import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../store/postsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const { id } = useParams();

  const post = useSelector((state) => state.posts.find((p) => p.id === id));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image || "");
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id, title, content, image }));
    navigate("/");
  };

  // 🔥 Important fallback
  if (!post) {
    return (
      <div className="text-center mt-20 text-gray-500 dark:text-gray-400">
        Post not found
      </div>
    );
  }

  return (
    <PostForm
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      image={image}
      setImage={setImage}
      onSubmit={handleSubmit}
      buttonText="Update"
    />
  );
}
