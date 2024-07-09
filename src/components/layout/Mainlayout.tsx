import { Layout, Menu } from 'antd';
import {  Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/Admin.routes';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { createElement } from 'react';

const { Header, Content, Footer, Sider } = Layout;



// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     label: "Dashbord"
//   },
//   {
//     key: 'home',
//     label: <NavLink to="/">Home</NavLink> 
//   },
//   {
//     key: '3',
//     label: "About"
//   },
//   {
//     key: '4',
//     label: "User management",
//     children: [
//        { key: 'create-admin',
//         label: <NavLink to = '/admin/create-admin'>Create admin</NavLink>
//     },
//        { key: '33',
//         label: 'technology'
//     },
//        { key: '44',
//         label: 'architect'
//     },
//     ]
//   },
  
// ]

const Mainlayout = () => {
    return (
        <Layout style={{height: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <h1 style={{color: "white", display: "flex" ,paddingTop:'5px', justifyContent: "center" , alignItems: "center"}}> Ph-university</h1>
        <Menu style={{color: 'white'}} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              
              
            }}
          >
          <Outlet/>
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    );
};

export default Mainlayout;