import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SideBar from './no2_components/layout/SideBar'

const Layout = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`

const MainContent = styled.main`
  flex: 1;
  padding: 24px;
  background: #f1f5f9;
`

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <HeaderBar setIsOpen={setIsOpen} />

      <Layout>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/employee" element={<EmployeePage />} />
          </Routes>
        </MainContent>
      </Layout>
    </BrowserRouter>
  )
}

export default App