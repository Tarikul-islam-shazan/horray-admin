import React, { Component } from 'react';
import PieChart from './pie-chart';
import { Row, Col } from 'antd';



class Dashboard extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col span={24}>col</Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <PieChart />
                    </Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </>
         
        );
    }
}

export default Dashboard;
