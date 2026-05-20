import React, { use } from 'react'
import LoginForm from '../../no2_components/user/LoginForm'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({users, setLoginMode}) => {
  const navi = useNavigate();
  return (
    <LoginForm
        users={users}
        setLoginMode={setLoginMode}
    />
  )
}

export default LoginPage
