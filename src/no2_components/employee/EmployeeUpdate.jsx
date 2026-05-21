import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const EmployeeUpdate = ({ emp, setState }) => {
  const [newEmp, setNewEmp] = useState(emp)
  useEffect(() => {
    emp &&
      setNewEmp(emp)
  }, [emp])
  const handleChange = (event) => {
    const { name, value } = event.target
    setNewEmp(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setState(prev => ({
      ...prev,
      empTable: prev.empTable.map(item => (
        item.id === emp.id ?
          newEmp : item
      )
      )
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <label>이름</label>
        {newEmp &&
          <input
            type="text"
            name="name"
            value={newEmp.name}
            onChange={handleChange}
            placeholder="이름" />}
      </InputBox>
      <InputBox>
        <label>이메일</label>
        <input
          type="email"
          name="email"
          value={newEmp.email}
          onChange={handleChange}
          placeholder="이메일" />
      </InputBox>
      <InputBox>
        <label>직업</label>
        <input
          type="text"
          name="job"
          value={newEmp.job}
          onChange={handleChange}
          placeholder="직업" />
      </InputBox>
      <InputBox>
        <label>급여</label>
        <input
          type="text"
          name="pay"
          value={newEmp.pay}
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
export default EmployeeUpdate
