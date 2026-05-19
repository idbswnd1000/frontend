import React from 'react'


const EmployeeTable = ({ infos }) => {
    return (
        <table>
            <tr>
                {Object.keys(infos[0]).map(key => (
                    <th>{key}</th>
                ))}
            </tr>
            {infos.map(item => (
                <tr key={item.id}>
                    {Object.values(item).map(value => (
                        <td>{value}</td>
                    ))}
                </tr>
            ))}
        </table>


    )
}

export default EmployeeTable
