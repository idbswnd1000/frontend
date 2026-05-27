import React, { useContext } from 'react'
import styled from 'styled-components'
import TodoTemplete from '../../no2_components/todo/TodoTemplete'
import TodoInsert from '../../no2_components/todo/TodoInsert'
import TodoList from '../../no2_components/todo/TodoList'
import { TodoContext } from '../../no0_context/TodoContext'


const TodoPage = () => {
  const {state} = useContext(TodoContext)

  return (
    <Container>
      <TodoBox>
        <TodoTemplete>
          <TodoInsert />
          <TodoList/>
        </TodoTemplete>
      </TodoBox>
    </Container>
  )
}

export default TodoPage

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TodoBox = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
`