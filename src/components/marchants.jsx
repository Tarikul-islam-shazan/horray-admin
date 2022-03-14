import React  from 'react';
import { Link } from 'react-router-dom';
import ReusableForm from './common/reuseable-form';
import { Form,Table, Tag, Space , Modal, Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import Joi from 'joi-browser';
import { getMarchants, saveMarchant } from './services/fakeMarchantService';

class Marchants extends ReusableForm {
    state = {
        data : {
          marchant: '',
          phone: '',
          address:''
          },
          errors: {},
          tableData : [],
          tableColumns : [
            {
              title: 'Marchant',
              dataIndex: 'marchant',
              key: 'marchant',
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
              title: 'Discount',
              key: 'discount',
              dataIndex: 'discount',
              render: discount => (
                <>
                  {discount.map(tag => {
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
                    {record.name}
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
      marchant: Joi.string().required().label('marchant'),
      phone: Joi.string().required().label('phone'),
      address: Joi.string().required().label('address'),
    }
    

    componentDidMount() {
      const tableData  = getMarchants();
      this.setState({ tableData});
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

    doSubmit = () =>{
      saveMarchant(this.state.data);
      const { data } = this.state;
      let tableData = [...this.state.tableData];
      const marchant = { key: this.state.tableData.length + 1, ...data, discount : ['20%','Mid'] }
      tableData.push(marchant);
      this.setState({ tableData })
      console.log(marchant);
      this.hideModal();
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
                  title="Add Marchant"
                  visible={visible}
                  onOk={this.handleSubmit}
                  onCancel={this.hideModal}
                  okText="Add"
                  cancelText="cancle">
                  <Form layout="vertical">
                    {this.renderInput("marchant","Marchant Name","Enter your Marchant Name here.","text","true")}
                    {this.renderInput("phone","Telephone No","Enter your Phone No here.","number","true")}
                    {this.renderInput("address","Office Address","Enter your address here.","text","true")}
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
