import React, { useState } from 'react'
import styled from 'styled-components'

const initialEmp = {
  id: "", name: "", email: "", job: "", pay: ""
}

const EmployeeRegister = ({ setState }) => {
  const [emp, setEmp] = useState(initialEmp)
  const handleChange = (event) => {
    const { name, value } = event.target
    setEmp(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const dateId= Date.now()
    emp &&
    setState(prev => (
      {
        ...prev, empTable: [...prev.empTable, {
          ...emp, id: dateId
        }]        
      }
    ))
    setState(prev=>({
      ...prev,selectedId:dateId //selectedId:prev.empTable[prev.empTable.length-1]
    }))
    setEmp(initialEmp)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <label>이름</label>
        <input
          type="text"
          name="name"
          value={emp.name}
          onChange={handleChange}
          placeholder="이름" />
      </InputBox>
      <InputBox>
        <label>이메일</label>
        <input
          type="email"
          name="email"
          value={emp.email}
          onChange={handleChange}
          placeholder="이메일" />
      </InputBox>
      <InputBox>
        <label>직업</label>
        <input
          type="text"
          name="job"
          value={emp.job}
          onChange={handleChange}
          placeholder="직업" />
      </InputBox>
      <InputBox>
        <label>급여</label>
        <input
          type="text"
          name="pay"
          value={emp.pay}
          onChange={handleChange}
          placeholder="급여" />
      </InputBox>
      <SubmitButton>제출</SubmitButton>
    </Form>
  )
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
`

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  label{
    width: 70px;
    font-weight: 600;
  }

  input{
    flex: 1;
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
  }
`

const SubmitButton = styled.button`
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;

  &:hover{
    background: #1d4ed8;
  }
`
export default EmployeeRegister
