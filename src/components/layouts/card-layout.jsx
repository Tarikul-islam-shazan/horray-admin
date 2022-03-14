import React , {Component} from 'react';
import { Card, Menu, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';


class CardLayout  extends Component {
    state = {
        visible: false,
      };
    
      handleMenuClick = e => {
        if (e.key === '3') {
          this.setState({ visible: false });
        }
      };
    
      handleVisibleChange = flag => {
        this.setState({ visible: flag });
      };

    menu = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">Action</Menu.Item>
            <Menu.Item key="2">Deatils</Menu.Item>
        </Menu>
    
      );
    render(){
        const { bgColor,title, subTitle } = this.props;
        return (
            
            <Card 
            bordered={false} 
            style={{
                height: 180,
                background: bgColor,
                borderRadius: '5px',
                boxShdow: '2px 2px',
                color: 'white',
                marginBottom: '10px'
            }}>
            <p className='title' style={{ fontSize: '24px', fontWeight: 900, marginBottom: '0px'}}>
                {title} 
                <span style={{color: 'white', float:'right'}}>
                    <Dropdown 
                    overlay={this.menu}  
                    placement="bottomRight"
                    onVisibleChange={this.handleVisibleChange}>
                        <EllipsisOutlined 
                        style={{ transform: 'rotate(90deg)'}} 
                        onClick={e => e.preventDefault()} /> 
                    </Dropdown>
                </span>
            </p>
            <p className='sub-title' style={{ fontSize: '16px', fontWeight: 800,  marginBottom: '2em'}}>{subTitle}</p>
            </Card>
    );
    }
}

export default CardLayout;