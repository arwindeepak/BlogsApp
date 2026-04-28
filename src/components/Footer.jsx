export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 mt-20 transition-colors">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-wide">
            BLOG
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            A modern blogging platform built with React, Redux, and beautiful
            UI. Share your thoughts with the world.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-black dark:text-white font-semibold mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">
              Add Post
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Explore
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-black dark:text-white font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Docs</li>
            <li className="hover:text-white cursor-pointer transition">
              Guides
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Support
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-black dark:text-white font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-black hover:text-white transition cursor-pointer">
              T
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-black hover:text-white transition cursor-pointer">
              L
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-black hover:text-white transition cursor-pointer">
              G
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4">Stay connected with us</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 dark:border-gray-700"></div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Blog App. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer transition">
            Privacy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
}
