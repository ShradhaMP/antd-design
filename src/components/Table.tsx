import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface DataType{
       key:string,
       name:string,
       age:number,
       address:string,
       tags:string[]
}

const TableLayout:React.FC=()=> {
       const data:DataType[]=[
              {
                     name:"name 1",
                     age:20,
                     address:"Address 1",
                     key:'1',
                     tags:['nice','developer']
              },
              {
                     name:"name 2",
                     age:10,
                     address:"Address 2",
                     key:'2',
                     tags:['nice','developer']
              },
              {
                     name:"name 3",
                     age:30,
                     address:"Address 3",
                     key:'3',
                     tags:['nice','developer']
              }
       ]

       const columns:ColumnsType<DataType>=[
              {
                     title:"Name",
                     dataIndex:"name",
                     key:'key',
                     render:name=>{
                            return <a href="https://www.google.com">{name}</a>
                     }
              },
              {
                     title:"Age",
                     dataIndex:"age",
                     key:'key',
                     sorter:(a,b)=>{
                            return a.age-b.age;
                     }
              },
              {
                     title:"Address",
                     dataIndex:"address",
                     key:'key'
              },
              {
                     title:"Graduated",
                     key:'key',
                     render:payload=>{
                            return <p>{payload.age>20?'true':'false'}</p>
                     }
              },
              {
                     title:"Tags",
                     key:'key',
                     dataIndex:'tags',
              }
       ]
  return (
    <div>
      <Table
      dataSource={data}
      columns={columns}
      />
    </div>
  )
}

export default TableLayout
