import React from 'react'
import TodoListChild from './TodoListChild'


const TodoList = ({todoList, setState}) => {
  return (
    <div>
        {todoList?.map(item=>( // {todoList && todoList.map}
          <TodoListChild
            key={item.id}
            item={item}  
            setState={setState}
          />
        ))}  
    </div>
  )
}

export default TodoList
