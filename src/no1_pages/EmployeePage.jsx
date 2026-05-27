// EmployeePage.jsx
import React, { useEffect, useContext } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'
import { EmployeeContext } from '../no0_context/EmployeeContext'

const EmployeePage = () => {
  const {state, dispatch} = useContext(EmployeeContext);
  const {selectedId, empTable, mode} = state;

  useEffect(()=>{
    selectedId &&
    dispatch({type:"set_emp",payload: empTable.filter(item=> item.id === selectedId)[0]})
  },[selectedId,empTable])

  const handleDelete = ()=>{
    if (!selectedId){
      alert("삭제할 데이터 선택")
      return;
    }
    dispatch({type:"delete"})
  }

  return (
    <div>
      <EmployeeList/>
      <EmployeeTable/>

      <div>
        <button onClick={()=>dispatch({type:"mode", payload:"register"})}>submit</button>
        <button onClick={()=>dispatch({type:"mode", payload:"update"})}>correction</button>
        <button onClick={()=>dispatch({type:"mode", payload:"delete"})}>delete</button>
      </div>
      
      {
        mode === "register" ? (
          <EmployeeRegister/>
        ) : mode === "update" ? (
          <EmployeeUpdate/> 
        ) : (
          <button onClick={handleDelete}> delete the data?</button>
        )
      }
      
    </div>
  )
}

export default EmployeePage