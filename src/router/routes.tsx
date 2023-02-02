import React from "react";
import { createMemoryRouter } from "react-router-dom";
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const router = createMemoryRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <Profile />,
    }
]);

export default router;