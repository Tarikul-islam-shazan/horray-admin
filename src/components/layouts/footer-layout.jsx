import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLayout = ()  =>{
    return (
        <Footer 
            style={{ textAlign: 'center', background: '#fff;',color:'black' }}
        >
            <b>Horray</b>!© 2022 All rights reserved by <b>Horray!</b>
        </Footer>

    );
}

export default FooterLayout;