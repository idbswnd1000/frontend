import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import EmployeeList from '../../no2_components/employee/EmployeeList'
import EmployeeTable from '../../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../../no2_components/employee/EmployeeUpdate'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeePage = () => {
  const { state, dispatch } = useContext(EmployeeContext)
  const { selectedId, empTable, mode } = state

  useEffect(() => {
    selectedId &&
      dispatch({
        type: "set_emp",
        payload: empTable.filter(item => item.id === selectedId)[0]
      })
  }, [selectedId, empTable])

  const handleDelete = () => {
    if (!selectedId) {
      alert("삭제할 데이터 선택")
      return
    }
    dispatch({ type: "delete" })
  }

  return (
    <Container>
      <Title>Employee Management</Title>

      <ContentBox>
        <EmployeeList />
        <EmployeeTable />

        <ButtonBox>
          <ActionButton onClick={() => dispatch({ type: "mode", payload: "register" })}>
            submit
          </ActionButton>

          <ActionButton onClick={() => dispatch({ type: "mode", payload: "update" })}>
            correction
          </ActionButton>

          <DeleteButton onClick={() => dispatch({ type: "mode", payload: "delete" })}>
            delete
          </DeleteButton>
        </ButtonBox>

        <FormBox>
          {
            mode === "register" ? (
              <EmployeeRegister />
            ) : mode === "update" ? (
              <EmployeeUpdate />
            ) : mode === "delete" ? (
              <ConfirmButton onClick={handleDelete}>
                delete the data?
              </ConfirmButton>
            ) : null
          }
        </FormBox>
      </ContentBox>
    </Container>
  )
}

export default EmployeePage

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 24px;
`

const ContentBox = styled.div`
  width: 100%;
  max-width: 760px;
  background: white;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
`

const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
  margin: 24px 0;
`

const ActionButton = styled.button`
  padding: 14px 18px;
  border: none;
  border-radius: 14px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);

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
`