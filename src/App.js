import React, { Component } from 'react';
import { Layout } from 'antd';
import {  Route, Redirect, Switch } from 'react-router-dom';
import HeaderLayout from './components/layouts/header-layout';
import SiderLayout from './components/layouts/sider-layout';
import Dashboard from './components/dashboard';
import Users from './components/users';
import FooterLayout from './components/layouts/footer-layout';

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
        <Layout>
          <SiderLayout collapsed={collapsed} />
          <Layout 
            style={{ padding: '0 24px 24px'}}
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
                      <Redirect from="/" exact to="/dashboard"/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
        <FooterLayout/>
      </Layout>
      
      </React.Fragment>
    );
  }
}

export default App;
