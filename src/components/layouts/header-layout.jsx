import React, { Component } from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderLayout = ({ collapsed,onToggle }) => {
        return (
            <Header className="header" style={{background: '#FF7F50'}}>
                {/* <div className="logo" /> */}
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: onToggle
                })}
            </Header>
        );
}

export default HeaderLayout;