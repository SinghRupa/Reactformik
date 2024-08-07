// import React, { useEffect } from 'react';
// import { useNavigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("username");

//   useEffect(() => {
//     if (!token) {
//       navigate('/login');
//     }
//   }, [token, navigate]);

//   return token ? <Outlet /> : null;
// };

// export default PrivateRoute;




import React from 'react';
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuth') === 'true';

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default GuestRoute;
