import React from "react";
import '../App.css'
import { Button, Checkbox, DatePicker, Form, Input, Select, message } from "antd";

const RegistrationForm: React.FC = () => {
  return (
    <div className="Form">
      <h2 style={{marginLeft:"25%"}}>Registration Form</h2>
      <Form
        style={{ maxWidth: 400 }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please Enter your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter the vlaid email address" },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Select placeholder="Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
        label="DOB"
        name="dob"
        >
              <DatePicker/>
        </Form.Item>
        <Form.Item label="Phone" name="Phone"
        rules={[{pattern:/^[0-9]*$/,message:"Enter valid Number"}]}
        >
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item
          name="Password"
          label="Password"
          rules={[{ required: true, message: "Enter Password" },
       {min:6,message:"Password is not strong enough"}
       ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
        wrapperCol={{offset:8,span:15}}
        rules={[{ required: true, message: "Enter Password" }]}
       
        >
          <Checkbox>
              I accept the terms and conditions 
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
