import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuthStore from './stores/authStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Product from './pages/Product';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  const { loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>      
          <Route path="/product" element={<Product/>}/> 
            <Route path="/services" element={<Services/>}/>       
             <Route path="/about" element={<Aboutus/>}/>   

        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          duration: 4000,
        }}
      />
    </>
  );
}

export default App;