import React from 'react';
import { Layout, Menu } from 'antd';
import { 
    UserOutlined, 
    LaptopOutlined, 
    NotificationOutlined, 
    DesktopOutlined 
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const {  Sider } = Layout;
const { SubMenu } = Menu;

const SiderLayout = ({ collapsed }) =>  {
    return (
        <Sider 
            width={300} 
            collapsed={collapsed}  
        >
           
              <Menu
                mode="inline"
                defaultSelectedKeys={['dashboard']}
                defaultOpenKeys={['user']}
                style={{ height: '100%', borderRight: 0 }}
              >
                
                 <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
                    <NavLink  to="/dashboard">Dashboard</NavLink>
                </Menu.Item>
                <SubMenu   key="user" icon={<UserOutlined />} title="Users">
                  <Menu.Item key="users">
                    <NavLink to="/users">
                      All Users
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">Users' Sale Info</Menu.Item>
                  {/*<Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item> */}
                </SubMenu>
                <SubMenu   key="marchant" icon={<LaptopOutlined />} title="Marchant">
                  <Menu.Item key="5" >
                    <NavLink to="/marchants">
                    Marchant Overview
                      </NavLink>
                  </Menu.Item>
                  {/* <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item> */}
                </SubMenu>
                <SubMenu   key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  {/* <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item> */}
                </SubMenu>
            </Menu>
          </Sider>
    );
}

export default SiderLayout;