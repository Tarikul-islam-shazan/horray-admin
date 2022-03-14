import React  from 'react';
import { Link } from 'react-router-dom';
import ReusableForm from './common/reuseable-form';
import { Form,Table, Tag, Space , Modal, Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import Joi from 'joi-browser';

class Marchants extends ReusableForm {
    state = {
        data : {
            brandname: ''
          },
          errors: {},
          tableData : [
            {
              key: '1',
              name: 'Bata',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Apex',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Sailor',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
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
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
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
                  <Link to="#" onClick={this.showModal}>
                    <EditOutlined /> Edit
                  </Link>
                  <Link to="#" >Delete</Link>
                </Space>
              ),
            },
          ],
          visible: false
    }
    schema = {
        brandname: Joi.string().required().label('brandname')
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    hideModal = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        const { tableColumns, tableData, visible } = this.state;
        return (
            <React.Fragment>
                <Button type="primary" onClick={this.showModal} style={{
                      float: 'right',}} icon={<PlusOutlined />}  size="large">
                    Add
                </Button>
                <Modal
                  title="Marchant Add Form"
                  visible={visible}
                  onOk={this.hideModal}
                  onCancel={this.hideModal}
                  okText="Add"
                  cancelText="cancle">
                  <Form layout="vertical">
                    {this.renderInput("brandname","Brand","Enter your brand here.")}
                  </Form>
                </Modal>
            <Table 
              columns={tableColumns} 
              dataSource={tableData} />
          </React.Fragment>
        );
    }
}

export default Marchants;
