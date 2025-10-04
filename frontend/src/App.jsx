import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuthStore from './stores/authStore';
import Navbar from './components/Navbar';
import Home from './pages/Home';


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

        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>

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