// import { Children } from "react";
// import { ReactNode } from "react";
// import AcademicSemester from "../pages/admin/academicManagemant/AcademicSemester";
import AcademicSemester from "../pages/admin/academicManagemant/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
// import { NavLink } from "react-router-dom";




export const adminpaths =[
    {
        name: 'dashboard',
        path: "dashboard",
        element: < AdminDashboard></AdminDashboard>
    },
    {
        name: 'Academic Management',
        children: [
          {
            name: 'Academic Semester',
            path: 'academic-semester',
            element: <AcademicSemester />,
          },
        ],
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




