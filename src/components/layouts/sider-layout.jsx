import React from 'react';
import { Layout, Menu } from 'antd';
import { 
    UserOutlined, 
    LaptopOutlined, 
    NotificationOutlined, 
    DesktopOutlined 
} from '@ant-design/icons';
import { Link,NavLink } from 'react-router-dom';

const {  Sider } = Layout;
const { SubMenu } = Menu;

const SiderLayout = ({ collapsed }) =>  {
    return (
        <Sider 
            width={300} 
            collapsed={collapsed}
            className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
                 <Menu.Item key="1" icon={<DesktopOutlined />}>
                    <NavLink className="nav-item nav-link active " to="/dashboard">Dashboard</NavLink>
                </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                <Menu.Item key="1">
                  <NavLink className="nav-item nav-link " to="/users">User List</NavLink>
                </Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
    );
}

export default SiderLayout;