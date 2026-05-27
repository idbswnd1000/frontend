import React, { useState } from 'react'
import TodoTemplete from '../../no2_components/todo/TodoTemplete'
import TodoInsert from '../../no2_components/todo/TodoInsert'
import TodoList from '../../no2_components/todo/TodoList'

const initialState = {
  todoList: [
    { id: 1, subject: "HTML 공부", checked: false },
    { id: 2, subject: "CSS 공부", checked: false },
    { id: 3, subject: "React 공부", checked: false },
    { id: 4, subject: "Python 공부", checked: false }
  ],
  todoObj: { id: "", subject: "", checked: false }
}

const TodoPage = () => {
  const [state, setState] = useState(initialState)
  const { todoList, todoObj } = state;
  return (
    <TodoTemplete>
      <TodoInsert
        setState={setState}
        todoObj={todoObj} />
      <TodoList
        setState={setState}
        todoList={todoList} />
    </TodoTemplete>
  )
}

export default TodoPage
