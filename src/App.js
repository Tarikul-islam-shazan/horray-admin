import React, { Component } from 'react';
import { Layout } from 'antd';
import {  Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import HeaderLayout from './components/layouts/header-layout';
import SiderLayout from './components/layouts/sider-layout';
import Dashboard from './components/dashboard';
import Users from './components/users';
import FooterLayout from './components/layouts/footer-layout';
import Marchants from './components/marchants';

const {  Content } = Layout;
class App extends Component {

  state = {
    collapsed: false,
  }

  handleToggle = () => {
      this.setState({
          collapsed: !this.state.collapsed,
      })
  }

  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    const { collapsed } = this.state;
    return (
      <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderLayout 
        collapsed={collapsed} 
        onToggle={this.handleToggle}/>
        <Layout style={{ background: '#800080' }}>
          <SiderLayout collapsed={collapsed} />
          <Layout 
            
          >
            <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}>
                  
              <Switch>
                      <Route path='/dashboard' component={Dashboard}></Route>
                      <Route path='/users' component={Users}></Route>
                      <Route path='/marchants' component={Marchants}></Route>
                      <Redirect from="/" exact to="/dashboard"/>
              </Switch>
            </Content>
            <FooterLayout/>
          </Layout>
        </Layout>
       
      </Layout>
      
      </React.Fragment>
    );
  }
}

export default App;
