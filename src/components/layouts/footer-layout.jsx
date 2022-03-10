import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLayout = ()  =>{
    return (
        <Footer 
            style={{ textAlign: 'center', background: 'white',color:'black' }}
        >
            Horray ©2022 All rights reserved by Horray
        </Footer>

    );
}

export default FooterLayout;