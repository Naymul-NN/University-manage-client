// import { Children } from "react";
// import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
// import { NavLink } from "react-router-dom";

// type TRoute = {
//     path: string,
//     element: ReactNode
// }



export const adminpaths =[
    {
        name: 'dashboard',
        path: "dashboard",
        element: < AdminDashboard></AdminDashboard>
    },
    {
        name: 'User management',
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element:<CreateAdmin/>
        },
            {
                name: "Create faculty",
                path: "create-faculty",
                element:<CreateFaculty/>
        },
            {
                name: "Create student",
                path: "create-student",
                element:<CreateStudent/>
        },
        ]
    }
]



// export const adminSidebarItems = adminpaths.reduce((acc:TsideBarItem[], item) =>{
//     if(item.path && item.name){
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         })
//     }

//     if(item.children){
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map((child) => ({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,

//             }))
//         })
//     }
//     return acc;
// }, [])

