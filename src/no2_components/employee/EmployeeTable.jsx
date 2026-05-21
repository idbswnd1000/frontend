import React from 'react'
import styled from 'styled-components'

const EmployeeTable = ({ state }) => {
    const { emp } = state;
    return (
        <Table>
            <thead>
                <tr>
                    {emp && Object.keys(emp).map(key => (
                        <th key={key}>{key}</th>
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
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td{
    border: 1px solid #cbd5e1;
    padding: 12px;
    text-align: center;
  }

  th{
    background: #2563eb;
    color: white;
  }

  td{
    background: white;
  }
`
export default EmployeeTable
