import React from 'react';
import { Route, Outlet, Navigate } from 'react-router-dom';

/**
 * @param {logged} = Redux State if user isLogged or not Logged = condition
 * @param {children} = all remaining properties defined on the props object (collect them inside an argument called rest) above = path
 */

export const GuardedRoute = ({ logged }) => {
    if (!logged) {
        return <Navigate to='/login' replace />;
    }
    return <Outlet />;
};

/**
 * @param {admin} = Redux State if user is Admin or not Admin = role_id condition
 */
export const AdminRoute = ({ admin }) => {
    if (admin !== 3) {
        return <Navigate to='/' replace />;
    }
    return <Outlet />;
};

export default GuardedRoute;

