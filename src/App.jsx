import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Solutions from "./pages/Solutions";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}
      <Route element={<Layout />}>

        {/* HOME */}
        <Route index element={<Home />} />

        {/* ABOUT */}
        <Route path="about" element={<About />} />

        {/* PRODUCTS */}
        <Route path="products" element={<Products />} />

        {/* PRODUCT CATEGORY */}
        <Route
          path="products/:categorySlug"
          element={<ProductCategory />}
        />

        {/* PROJECTS */}
        <Route path="projects" element={<Projects />} />

        {/* CLIENTS */}
        <Route path="clients" element={<Clients />} />

        {/* SOLUTIONS */}
        <Route path="solutions" element={<Solutions />} />

        {/* BLOG */}
        <Route path="blog" element={<Blog />} />

        {/* BLOG POST */}
        <Route path="blog/:slug" element={<BlogPost />} />

        {/* CONTACT */}
        <Route path="contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}