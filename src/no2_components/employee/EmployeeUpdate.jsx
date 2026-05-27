// EmployeeUpdate.jsx
import React, {useContext, useEffect, useState} from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const initialEmp = {
  id:"",name:"",email:"",job:"",pay:""
}

const EmployeeUpdate = () => {
  const {state, dispatch} = useContext(EmployeeContext);
  const {emp} = state;
  const [newEmp, setNewEmp] = useState(emp || initialEmp);

  useEffect(()=>{
    if(emp) {
      setNewEmp(emp)
    }
  },[emp])

  const handleChange = (event)=> {
    const {name, value} = event.target
    setNewEmp(prev => (
      {...prev,[name]:value}
    ))
  }
  const handleSubmit = (event)=> {
    event.preventDefault();
    dispatch({type:"update",payload:newEmp})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={newEmp.name}
            onChange={handleChange}
            placeholder='name'/>
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={newEmp.email}
            onChange={handleChange}
            placeholder='email'/>
        </div>
        <div>
          <label>job</label>
          <input
            type="text"
            name="job"
            value={newEmp.job}
            onChange={handleChange}
            placeholder='job'/>
        </div>
        <div>
          <label>pay</label>
          <input
            type="number"
            name="pay"
            value={newEmp.pay}
            onChange={handleChange}
            placeholder='pay'/>
        </div>
        <button>submit</button>
      </form>
    </>
  )
}

export default EmployeeUpdate