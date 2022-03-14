import React from 'react';
import { Input, Form } from 'antd';

const FormInput = ({ name, label, placeholder, type, value, onChange, error }) => {
    return (
        <Form.Item
        label={label}
        validateStatus={error ? 'error' : 'success' }
        help={error? error : '' }>
            <Input 
            id={name}
            name={name} 
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            size="large" />
        </Form.Item>
    );
}

export default FormInput;