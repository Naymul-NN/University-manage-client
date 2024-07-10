import { Layout, Menu } from 'antd';
import { sideBarRoutes } from '../../utils/SidebarItemGenerator';
import { adminpaths } from '../../routes/Admin.routes';
import { facultyPaths } from '../../routes/Faculty.routes';
import { studentPaths } from '../../routes/Student.routes';
const {  Sider } = Layout;

const userRole ={
    ADMIN : "admin",
    FACULTY : "faculty",
    STUDENT : "student",
}

const Sidebar = () => { 

    const role = 'student';
    let sidebarItems;
  
    switch (role) {
      case userRole.ADMIN:
        sidebarItems = sideBarRoutes(adminpaths, userRole.ADMIN);
        break;
      case userRole.FACULTY:
        sidebarItems = sideBarRoutes(facultyPaths, userRole.FACULTY);
        break;
      case userRole.STUDENT:
        sidebarItems = sideBarRoutes(studentPaths, userRole.STUDENT);
        break;
  
      default:
        break;
    }

return ( 
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
       
      >
        <div className="demo-logo-vertical" />
        <h1 style={{ color: "white", display: "flex", paddingTop: '5px', justifyContent: "center", alignItems: "center" }}> Ph-university</h1>
        <Menu style={{ color: 'white' }} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={ sidebarItems} />
      </Sider>
);
};

export default Sidebar;