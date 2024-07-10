import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import { routeGenerator } from "../utils/routeGenerator";
import { adminpaths } from "./Admin.routes";





const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    // absulute path
    {
        path: "/admin",
        element: <App/>,
        children: routeGenerator(adminpaths)
    },
    {
        path: "/faculty",
        element: <App/>,
        children:  routeGenerator(adminpaths)
    },
    {
        path: "/student",
        element: <App/>,
        children:  routeGenerator(adminpaths)
    },
    {
        path: "/login",
        element: <Login/>
    }
]);

export default router;