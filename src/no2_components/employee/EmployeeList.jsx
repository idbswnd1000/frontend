import React from 'react'
import styled from 'styled-components'

const EmployeeList = ({ state, setState }) => {
  const { empTable } = state;
  const handleClick = (id) => {
    console.log("id", id)
    setState(prev => (
      { ...prev, selectedId: id }
    ))
  }
  return (
    <ListBox>
      {empTable.map(item => (
        <UserButton key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </UserButton>
      ))}
    </ListBox>
  )
}

const ListBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`

const UserButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #e2e8f0;
  cursor: pointer;
  transition: 0.2s;

  &:hover{
    background: #cbd5e1;
  }
`
export default EmployeeList
