import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="group cursor-pointer">
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={post.image || "https://picsum.photos/800/600"}
            alt={post.title}
            className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
        </div>

        {/* CONTENT */}
        <div className="mt-5 space-y-2">
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Blog
          </p>

          <h2 className="text-lg font-semibold leading-snug text-black dark:text-white group-hover:text-blue-500 transition">
            {post.title}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
            {post.content}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-2">
            <span>❤️ {post.likes} Likes</span>
            <span className="group-hover:translate-x-1 transition">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
