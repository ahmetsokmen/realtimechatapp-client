import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../services/cookie.service';


export const PrivateRoute = () => {
    const auth = getCookie("loggedin");
    return auth ? <Outlet /> : <Navigate to="/login" />;
}
