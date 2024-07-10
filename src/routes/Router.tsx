import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import { routeGenerator } from "../utils/routeGenerator";
import { adminpaths } from "./Admin.routes";
import { facultyPaths } from "./Faculty.routes";
import { studentPaths } from "./Student.routes";


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
        children:  routeGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App/>,
        children:  routeGenerator(studentPaths)
    },
    {
        path: "/login",
        element: <Login/>
    }
]);

export default router;