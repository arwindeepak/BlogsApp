import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, likePost } from "../store/postsSlice";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.posts.find((p) => p.id === id));

  if (!post) {
    return <h2 className="text-center mt-10">Post not found</h2>;
  }

  return (
    <div className="flex justify-center items-start py-10 px-4">
      {/* 🔥 PERFECT CARD WIDTH */}
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden">
        {/* IMAGE */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-52 object-cover"
        />

        {/* CONTENT */}
        <div className="p-5">
          <h1 className="text-xl font-semibold mb-2">{post.title}</h1>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {post.content}
          </p>

          {/* ACTIONS */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">👍 {post.likes}</span>

            <div className="flex gap-2">
              <button
                onClick={() => dispatch(likePost(post.id))}
                className="px-3 py-1 text-xs rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Like
              </button>

              <button
                onClick={() => navigate(`/edit/${post.id}`)}
                className="px-3 py-1 text-xs rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  dispatch(deletePost(post.id));
                  navigate("/");
                }}
                className="px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
