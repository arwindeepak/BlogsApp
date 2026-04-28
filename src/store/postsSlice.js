import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//  Always ensure at least one post exists
const loadPosts = () => {
  const data = localStorage.getItem("posts");

  const defaultPost = {
    id: uuidv4(),
    title: "First Post",
    content: "This is your first blog!",
    author: "Admin",
    likes: 0,
    image: "https://picsum.photos/800/600",
  };

  if (!data) {
    return [defaultPost];
  }

  try {
    const parsed = JSON.parse(data);

    //  If empty or invalid → return default
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return [defaultPost];
    }

    //  Ensure every post has image
    return parsed.map((post) => ({
      ...post,
      image: post.image || "https://picsum.photos/800/600",
    }));
  } catch (error) {
    // If JSON is corrupted
    return [defaultPost];
  }
};

const initialState = loadPosts();

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // ADD POST
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem("posts", JSON.stringify(state));
      },
      prepare(post) {
        return {
          payload: {
            ...post,
            id: uuidv4(),
            likes: 0,
            image: post.image || "https://picsum.photos/800/600",
          },
        };
      },
    },

    //  UPDATE POST
    updatePost(state, action) {
      const { id, title, content, image } = action.payload;
      const existing = state.find((p) => p.id === id);

      if (existing) {
        existing.title = title;
        existing.content = content;
        existing.image = image || existing.image;
      }

      localStorage.setItem("posts", JSON.stringify(state));
    },

    //  DELETE POST
    deletePost(state, action) {
      const updated = state.filter((p) => p.id !== action.payload);

      // ✅ Ensure at least one post remains
      if (updated.length === 0) {
        const defaultPost = {
          id: uuidv4(),
          title: "First Post",
          content: "This is your first blog!",
          author: "Admin",
          likes: 0,
          image: "https://picsum.photos/800/600",
        };
        localStorage.setItem("posts", JSON.stringify([defaultPost]));
        return [defaultPost];
      }

      localStorage.setItem("posts", JSON.stringify(updated));
      return updated;
    },

    // 👍 LIKE POST
    likePost(state, action) {
      const post = state.find((p) => p.id === action.payload);
      if (post) post.likes++;

      localStorage.setItem("posts", JSON.stringify(state));
    },
  },
});

export const { addPost, updatePost, deletePost, likePost } = postsSlice.actions;
export default postsSlice.reducer;
