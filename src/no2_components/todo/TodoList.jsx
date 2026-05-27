import React,{useContext} from 'react'
import styled from 'styled-components'
import TodoListChild from './TodoListChild'
import { TodoContext } from '../../no0_context/TodoContext'

const TodoList = () => {
  const {state} = useContext(TodoContext)
  const {todoList} = state;
  return (
    <ListBox>
      {todoList?.map(item => (
        <TodoListChild
          key={item.id}
          item={item}
        />
      ))}
    </ListBox>
  )
}

export default TodoList

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`