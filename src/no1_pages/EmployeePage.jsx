import React, { useEffect, useState } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'
import styled from 'styled-components'

const initialEmps = [
  { id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600 },
  { id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600 },
  { id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600 },
  { id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600 },
]
const initialEmp = {
  id: "", name: "", email: "", job: "", pay: ""
}
const initialState = {
  empTable: initialEmps,
  emp: initialEmp,
  mode: "",
  selectedId: ""
}
const EmployeePage = () => {
  const [state, setState] = useState(initialState)
  const { selectedId, empTable, emp, mode } = state;
  useEffect(() => {
    selectedId &&
      setState(prev => (
        { ...prev, emp: empTable.filter(item => item.id === selectedId)[0] }
      ))
  }, [selectedId, empTable])
  const handleDelete = () => {
    if (!selectedId) {
      alert("삭제할 데이터를 선택하세요.");
      return;
    }
    setState(prev => (
      {
        ...prev, empTable: prev.empTable.filter(item => item.id !== selectedId),
        emp: initialEmp,
        selectedId: ""
      }
    ))
  }
  return (
    <Container>
      <Title>Employee Management</Title>

      <ContentBox>
        <EmployeeList state={state} setState={setState} />
        <EmployeeTable state={state} />

        <ButtonBox>
          <ActionButton onClick={() => setState(prev => ({ ...prev, mode: "register" }))}>
            등록
          </ActionButton>

          <ActionButton onClick={() => setState(prev => ({ ...prev, mode: "update" }))}>
            수정
          </ActionButton>

          <DeleteButton onClick={() => setState(prev => ({ ...prev, mode: "delete" }))}>
            삭제
          </DeleteButton>
        </ButtonBox>

        <FormBox>
          {
            mode === "register" ? <EmployeeRegister setState={setState} />
              : mode === "update" ? <EmployeeUpdate emp={emp} setState={setState} />
                : mode === "delete" ? <ConfirmButton onClick={handleDelete}>위 데이터를 삭제하시겠습니까?</ConfirmButton>
                  : null
          }
        </FormBox>
      </ContentBox>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  padding: 24px;
`

const Title = styled.h2`
  margin-bottom: 24px;
  color: #1e293b;
`

const ContentBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`

const ActionButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`

const DeleteButton = styled(ActionButton)`
  background: #ef4444;

  &:hover {
    background: #dc2626;
  }
`

const ConfirmButton = styled(DeleteButton)`
  width: fit-content;
`

const FormBox = styled.div`
  margin-top: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
  }

  label {
    display: inline-block;
    width: 70px;
    font-weight: 600;
  }

  button {
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
  }
`

export default EmployeePage
