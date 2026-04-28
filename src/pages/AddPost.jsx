import { useDispatch } from "react-redux";
import { addPost } from "../store/postsSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, content, image, author: "User" }));
    navigate("/");
  };

  return (
    <PostForm
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      image={image}
      setImage={setImage}
      onSubmit={handleSubmit}
      buttonText="Publish"
    />
  );
}
