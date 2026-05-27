import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './no1_pages/employee/HomePage.jsx'
import TodoPage from './no1_pages/todo/TodoPage.jsx'
import EmployeePage from './no1_pages/employee/EmployeePage.jsx'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'
import LoginPage from './no1_pages/user/LoginPage'
import RegistePage from './no1_pages/user/RegistePage'
import EmployeeProvider from './no0_context/EmployeeContext.jsx';
import UserProvider from './no0_context/UserContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Container>
          <HeaderBar />
          <BodyLayout>
            <SiderBar />
            <PageContainer>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/employee" element={
                  <EmployeeProvider>
                    <EmployeePage />
                  </EmployeeProvider>
                } />
              </Routes>
            </PageContainer>
          </BodyLayout>
        </Container>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f1f5f9;
`;

const BodyLayout = styled.div`
    display: flex;
`;

const PageContainer = styled.main`
    flex: 1;
    padding: 32px;
    background: #f8fafc;
    min-height: calc(100vh - 70px);

    @media (max-width: 768px){
        padding: 90px 20px 20px 20px;
    }
`;