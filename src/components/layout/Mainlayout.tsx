import { Layout, Menu } from 'antd';
import {  Outlet } from 'react-router-dom';
import { sideBarRoutes } from '../../utils/SidebarItemGenerator';
import { adminpaths } from '../../routes/Admin.routes';
// import { adminSidebarItems } from '../../routes/Admin.routes';


const { Header, Content, Footer, Sider } = Layout;


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
        <Menu style={{color: 'white'}} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideBarRoutes(adminpaths,'admin')} />
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