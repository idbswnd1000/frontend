// EmployeeRegister.jsx
import React, {useContext, useState} from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext';

const initialEmp = {
  id:"",name:"",email:"",job:"",pay:""
}

const EmployeeRegister = () => {
  const {dispatch} = useContext(EmployeeContext)
  const [emp, setemp] = useState(initialEmp);

  const handleChange = (event)=> {
    const {name, value} = event.target
    setemp(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event)=> {
    event.preventDefault();
    const dateId = Date.now()
    
    dispatch({type:"register", payload:{ newId: String(dateId), emp }})
    setemp(initialEmp)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input type="text" name="name" value={emp.name} onChange={handleChange} placeholder='name' />
        </div>
        <div>
          <label>email</label>
          <input type="email" name="email" value={emp.email} onChange={handleChange} placeholder='email' />
        </div>
        <div>
          <label>job</label>
          <input type="text" name="job" value={emp.job} onChange={handleChange} placeholder='job' />
        </div>
        <div>
          <label>pay</label>
          <input type="number" name="pay" value={emp.pay} onChange={handleChange} placeholder='pay' />
        </div>
        <button>submit</button>
      </form>
    </>
  )
}

export default EmployeeRegister