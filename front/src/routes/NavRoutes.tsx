import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Players } from "../pages/play/Players";
import { Player } from "../containers/play/Player";
import { Create } from "../pages/create/Create";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Players />
            },
            {
                path: "/create",
                element: <Create />
            },
            {
                path: "/play/:id",
                element: <Player />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};



