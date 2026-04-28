export default function PostForm({
  title,
  setTitle,
  content,
  setContent,
  image,
  setImage,
  onSubmit,
  buttonText,
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      {/* SINGLE CENTERED CARD */}
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors">
        {/* HEADER */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {buttonText === "Publish" ? "Create Post" : "Edit Post"}
        </h2>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* TITLE */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />

          {/* IMAGE */}
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />

          {/* IMAGE PREVIEW */}
          {image && (
            <img src={image} alt="preview" className="rounded-lg mt-2" />
          )}

          {/* CONTENT */}
          <textarea
            placeholder="Write your content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-full 
                       hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
