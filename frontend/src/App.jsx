import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import useAuthStore from './stores/authStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import NotFoundPage from './pages/NotFoundPage';
import ContactUs from './pages/ContactUs';
import { Helmet } from 'react-helmet-async'; 

// Helper to scroll to top on every route change 
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <ScrollToTop />

      <Helmet>
        <title>
          Econanocat Pvt. Ltd. | Nanocatalysts & Clean Mobility Solutions
        </title>
        <meta
          name="description"
          content="Econanocat Pvt. Ltd. is a technology-driven company specializing in advanced nanocatalysts, functional nanoparticles, and emission control solutions for clean and sustainable mobility."
        />
        <meta
          name="keywords"
          content="Econanocat, nanocatalysts, emission control, clean mobility, nanotechnology company India"
        />
      </Helmet>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          duration: 4000,
        }}
      />
    </>
  );
}

export default App;