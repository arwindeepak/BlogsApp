import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import PostDetails from "./pages/PostDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
