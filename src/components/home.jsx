import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isAuth');
    navigate('/login');
  };
  return ( 
    <div>
      <h2 className='m-3'>Welcome! {username}</h2>
      <button className='btn btn-success p-2 m-3' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
