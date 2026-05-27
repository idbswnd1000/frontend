import React, { useContext } from 'react'
import styled from 'styled-components'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeTable = () => {
  const { state } = useContext(EmployeeContext)
  const { emp } = state

  return (
    <Table>
      <thead>
        <tr>
          {emp && Object.keys(emp).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          {emp && Object.values(emp).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  )
}

export default EmployeeTable

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);

  th,
  td {
    padding: 16px;
    text-align: center;
    border: 1px solid #e2e8f0;
  }

  th {
    background: #2563eb;
    color: white;
    font-size: 15px;
  }

  td {
    background: #ffffff;
    color: #1e293b;
  }
`