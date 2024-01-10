import React, { useState } from "react";
import { Upload, Button, Tag, Space,FloatButton } from "antd";
import { UploadOutlined,ExclamationCircleOutlined } from "@ant-design/icons";

const UploadComponent: React.FC = () => {
  const [fileUploaded,setFileUploaded] = useState(false);
  const [count,setCount] = useState(0);

  const onUpload=(info)=>{
    setFileUploaded(true);
    if(info.file.status === 'done'){
      setCount(count+1);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Space direction="vertical">
        <Upload.Dragger
          multiple
          listType="picture"
          action="http://localhost:5173"
          onChange={onUpload}
        >
          Drag files here or
          <br />
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload.Dragger>
    {  fileUploaded?null:(
        <Tag color="warning" icon={<ExclamationCircleOutlined/>} style={{padding:10}}>Upload to proceed further</Tag>
      )}

      <FloatButton badge={{count:count,color:'green'}}/>
      </Space>
    </div>
  );
};

export default UploadComponent;
