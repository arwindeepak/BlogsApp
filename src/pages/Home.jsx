import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";

export default function Home() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-12 tracking-tight text-black dark:text-white">
        The curious world of blogging, one post at a time
      </h1>

      {posts.length === 0 ? (
        <div className="text-center mt-20 text-gray-400 dark:text-gray-500">
          No posts yet
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
