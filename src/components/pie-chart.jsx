import React from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
    const data = [
        {
          type: 'Active User',
          value: 27,
        },
        {
          type: 'Inactive User',
          value: 25,
        },
        {
          type: 'Merchant',
          value: 18,
        },
        {
          type: 'Marchant Has order',
          value: 15,
        },
        {
            type: 'Marchant Has No order',
          value: 10,
        },
        {
          type: 'test',
          value: 5,
        },
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [
          {
            type: 'pie-legend-active',
          },
          {
            type: 'element-active',
          },
        ],
      };
    return (
        <Pie {...config} />
    );
}

export default PieChart;