import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const initialEmp = {
  id: "", name: "", email: "", job: "", pay: ""
}

const EmployeeRegister = () => {
  const { dispatch } = useContext(EmployeeContext)
  const [emp, setemp] = useState(initialEmp)

  const handleChange = (event) => {
    const { name, value } = event.target
    setemp(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const dateId = Date.now()

    dispatch({
      type: "register",
      payload: {
        newId: String(dateId),
        emp
      }
    })

    dispatch({
      type: "select",
      payload: String(dateId)
    })

    setemp(initialEmp)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <label>name</label>
        <input type="text" name="name" value={emp.name} onChange={handleChange} placeholder="name" />
      </InputBox>

      <InputBox>
        <label>email</label>
        <input type="email" name="email" value={emp.email} onChange={handleChange} placeholder="email" />
      </InputBox>

      <InputBox>
        <label>job</label>
        <input type="text" name="job" value={emp.job} onChange={handleChange} placeholder="job" />
      </InputBox>

      <InputBox>
        <label>pay</label>
        <input type="number" name="pay" value={emp.pay} onChange={handleChange} placeholder="pay" />
      </InputBox>

      <SubmitButton type="submit">submit</SubmitButton>
    </Form>
  )
}

export default EmployeeRegister

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    width: 70px;
    font-weight: 600;
    color: #1e293b;
  }

  input {
    flex: 1;
    padding: 14px;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    outline: none;
    font-size: 15px;

    &:focus {
      border-color: #2563eb;
    }
  }
`

const SubmitButton = styled.button`
  width: 120px;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);

  &:hover {
    background: #1d4ed8;
  }
`