import React from 'react'
import styled from 'styled-components'

const TodoTemplete = ({ children }) => {
  return (
    <Container>
      <Header>📌 일정관리</Header>

      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default TodoTemplete

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #1e293b;
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`