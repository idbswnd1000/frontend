import React, { useContext } from 'react'
import styled from 'styled-components'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeList = () => {
  const { state, dispatch } = useContext(EmployeeContext)
  const { empTable, selectedId } = state

  const handleClick = (id) => {
    dispatch({ type: "select", payload: id })
  }

  return (
    <ListBox>
      {empTable?.map(item => (
        <UserButton
          key={item.id}
          $active={selectedId === item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.name}
        </UserButton>
      ))}
    </ListBox>
  )
}

export default EmployeeList

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`

const UserButton = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: 14px;
  background: ${({ $active }) =>
    $active ? "#2563eb" : "#ffffff"};
  color: ${({ $active }) =>
    $active ? "white" : "#1e293b"};
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: ${({ $active }) =>
      $active ? "#1d4ed8" : "#f8fafc"};
  }
`