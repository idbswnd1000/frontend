// HeaderBar.jsx

import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const HeaderBar = ({ loginMode, setLoginMode }) => {
  const navi = useNavigate();
  const handleLogout = () => {
    setLoginMode(prev=>(
      {...prev, isLogin: false, usename:''}
    ))
    alert("로그아웃 되셨습니다.")
    navi("/login")
  }

  return (
    <Container>

      <Logo>
        MySystem
      </Logo>

      <Menu>
        {loginMode.isLogin ?

          <ButtonBox>
            <UserButton>
              안녕 {loginMode.username}
            </UserButton>

            <LogoutButton onClick={handleLogout}>
              로그아웃
            </LogoutButton>
          </ButtonBox>

          :

          <ButtonBox>
            <LoginButton onClick={() => navi("/login")}>
              로그인
            </LoginButton>

            <RegisterButton onClick={() => navi("/register")}>
              회원가입
            </RegisterButton>
          </ButtonBox>
        }
      </Menu>

    </Container>
  )
}

export default HeaderBar


const Container = styled.header`

    width: 100%;
    height: 70px;

    background: #1e293b;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 32px;

    box-shadow: 0 2px 8px rgba(0,0,0,0.15);

    position: sticky;
    top: 0;

    z-index: 1000;

    @media (max-width: 768px){
        display: none;
    }
`;

const Logo = styled.div`

    font-size: 24px;
    font-weight: bold;

    color: #4dabf7;

    cursor: pointer;
`;

const Menu = styled.div`

    display: flex;
    align-items: center;
`;

const ButtonBox = styled.div`

    display: flex;
    align-items: center;

    gap: 12px;
`;

const BaseButton = styled.button`

    border: none;
    outline: none;

    padding: 10px 16px;

    border-radius: 8px;

    cursor: pointer;

    font-size: 14px;
    font-weight: 600;

    transition: 0.2s;

    &:hover{
        transform: translateY(-1px);
    }
`;

const LoginButton = styled(BaseButton)`

    background: white;
    color: #1e293b;

    &:hover{
        background: #e2e8f0;
    }
`;

const RegisterButton = styled(BaseButton)`

    background: #3b82f6;
    color: white;

    &:hover{
        background: #2563eb;
    }
`;

const UserButton = styled(BaseButton)`

    background: white;
    color: #1e293b;
`;

const LogoutButton = styled(BaseButton)`

    background: #ef4444;
    color: white;

    &:hover{
        background: #dc2626;
    }
`;