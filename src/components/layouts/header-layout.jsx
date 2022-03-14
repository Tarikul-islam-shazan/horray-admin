import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderLayout = ({ collapsed,onToggle }) => {
        return (
            <Header className="header" style={{background: '#00008B'}}>
                  
                {
                React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    style:{ color: 'white' },
                    onClick: onToggle
                    }
                 )
                }
                 <div 
                    className="logo"  
                    style={{
                     float: 'left',
                      width: '250px',
                      height: '31px',
                      /*margin: '16px 24px 16px 0',*/
                      /*background: 'rgba(255, 255, 255, 0.3)',*/
                      color: 'white',
                      fontSize: '24px',
                      fontWeight:800,
                 }}>Horray! </div>
                
            </Header>
        );
}

export default HeaderLayout;