import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, ChevronDown, LayoutDashboard, LogOut, Settings } from 'lucide-react'; // Added LayoutDashboard and Settings icons
import useAuthStore from '../stores/authStore';
import { toast } from 'react-hot-toast';

function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>Navbar</div>
  );
}

export default Navbar;