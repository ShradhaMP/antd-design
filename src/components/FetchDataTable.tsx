import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

const FetchDataTable:React.FC=()=> {

       const [columns,setColumns] = useState([]);
       const [datasource,SetDatasource] = useState([]);

       useEffect(()=>{
              fetch("https://dummyjson.com/todos")
              .then((res)=>res.json())
              .then((data)=>{
                     const list = data.todos || [];
                     const firstObject = list[0] || {};
                     const cols=[];
                     for(const key in firstObject){
                            const col={
                                   title:key,
                                   dataIndex:key,
                                   render:(value)=>{
                                        return  <span>{String(value)}</span>
                                   }
                            }
                            cols.push(col);
                     }
                     setColumns(cols);
                     SetDatasource(list)
              })
       })

  return (
    <div>
      <Table columns={columns} dataSource={datasource}/>
    </div>
  )
}

export default FetchDataTable
