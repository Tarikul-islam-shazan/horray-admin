import React, { Component } from 'react';
import PieChart from './pie-chart';
import { Row, Col } from 'antd';
import CardLayout from './layouts/card-layout';

class Dashboard extends Component {
    render() {
        return (
            <>
                <Row gutter={16}>
                    <Col span={6} className="gutter-row"> 
                            <CardLayout title="26k" subTitle="Users" bgColor="#FF4500"/>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <CardLayout title="16k" subTitle="Marchant" bgColor="#0000FF"/> 
                    </Col>
                    <Col span={6} className="gutter-row">
                        <CardLayout title="11k" subTitle="Agents" bgColor="#32CD32"/>
                    </Col>
                    <Col span={6} className="gutter-row">
                        <CardLayout title="100 points" subTitle="Income" bgColor="#87ceeb"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} style={{ background: '#fff'}}>
                        <PieChart />
                    </Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </>
         
        );
    }
}

export default Dashboard;
