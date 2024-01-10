import React from "react";
import '../App.css'
import { Button, Checkbox, DatePicker, Form, Input, Select,Spin,Progress } from "antd";

const RegistrationForm: React.FC = () => {
  return (
    <div className="Form">
      <h2 style={{marginLeft:"25%"}}>Registration Form</h2>
      <Form
        autoComplete="off"
        style={{ maxWidth: 400 }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={(values)=>console.log({values})
        }
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please Enter your name!" },
        {min:3},
        {whitespace:true}
        ]}
        hasFeedback
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter the valid email address" },
          ]}
          hasFeedback
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
       {min:6,message:"Password is not strong enough"},
      
       ]}
       hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="ConfirmPassword"
          label="ConfirmPassword"
          dependencies={["Password"]}
          rules={[{ required: true, message: "Enter Password" },
         ({getFieldValue})=>({
          validator(_,value){
            if(!value||getFieldValue("Password")===value)
              return Promise.resolve();
            return Promise.reject()
          }
         })
       ]}
       hasFeedback
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item
        label="Select range"
        >
          <DatePicker.RangePicker/> 
        </Form.Item>
        <Form.Item
        label="Progress"
        >
          <Progress type="line" percent={60} success={{percent:30}} status="active"/>
        </Form.Item>
        <Form.Item
        name="agreement"
        wrapperCol={{offset:8,span:20}}
        valuePropName="checked"
        rules={[{
          validator:(_,value)=>
            value
              ?Promise.resolve()
              :Promise.reject("To Proceed agree to the conditions")
        }]}
        >
          <Checkbox>
              I accept the <a href="">terms and conditions </a>
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Spin/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
