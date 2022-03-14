import React from 'react';
import { Link } from 'react-router-dom';
import { Form,Table, Tag, Space , Modal, Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import Joi from 'joi-browser';
import ReusableForm from './common/reuseable-form';

class Users extends ReusableForm {

  state = { 
    data : {
      username: ''
    },
    errors: {},
    tableData : [
      {
        key: '1',
        name: 'John Brown',
        phone: '+8801784732783',
        address: 'New York No. 1 Lake Park',
        tags: ['user'],
      },
      {
        key: '2',
        name: 'Jim Green',
        phone: '+8801784732783',
        address: 'London No. 1 Lake Park',
        tags: ['Agent'],
      },
      {
        key: '3',
        name: 'Joe Black',
        phone: '+8801784732783',
        address: 'Sidney No. 1 Lake Park',
        tags: ['marchant'],
      },
    ],
    tableColumns : [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <Link to="#">{text}</Link>,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Link to="#" onClick={this.showUserEditModal}>
              <EditOutlined /> Edit
            </Link>
            <Link to="#" >Delete</Link>
          </Space>
        ),
      },
    ],
    visibleUserEditForm: false,
    visibleAddUserForm: false
  };

  schema = {
    username: Joi.string().required().label('username'),
    firstname: Joi.string().required().label('firstname'),
    lastname: Joi.string().required().label('firstname'),
    phone: Joi.number().required().label('phone')
  }

  showUserAddModal = () => {
    this.setState({
      visibleAddUserForm: true,
    });
  }

  hideUserAddModal = () => {
    this.setState({
      visibleAddUserForm: false,
    });
  };

  showUserEditModal = () => {
    this.setState({
      visibleUserEditForm: true,
    });
  };

  hideUserEditModal = () => {
    this.setState({
      visibleUserEditForm: false,
    });
  };

  doSubmit = () => {
    console.log('submitted');
  }
    
    render() {
      const { tableColumns, tableData, visibleAddUserForm } = this.state;
        return (
          <React.Fragment>
                <Button type="primary" onClick={this.showUserAddModal} style={{
                      float: 'right',}} icon={<PlusOutlined />}  size="large">
                    Add
                </Button>
                <Modal
                  title="User Add Form"
                  visible={visibleAddUserForm}
                  onOk={this.hideUserAddModal}
                  onCancel={this.hideUserAddModal}
                  okText="Add"
                  cancelText="cancle">
                  <Form layout="vertical">
                    {this.renderInput("username","Username","Enter your username here.")}
                    {this.renderInput("firstname","First name","Enter your first name here.")}
                    {this.renderInput("Lastname","Last name","Enter your last name here.")}
                    {this.renderInput("phone","Phone","Enter your phone no here.","number")}
                  </Form>
                </Modal>
            <Table 
              columns={tableColumns} 
              dataSource={tableData} />
            {/* <Modal
              title="User Edit Form"
              visible={visibleUserEditForm}
              onOk={this.hideUserEditModal}
              onCancel={this.hideUserEditModal}
              okText="Update"
              cancelText="cancle">
              <Form layout="vertical">
                {this.renderInput("username","Username","Enter your username here.")}
              </Form>
            </Modal> */}
          </React.Fragment>
        );
    }
}

export default Users;