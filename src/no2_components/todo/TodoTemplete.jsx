import React from 'react'

const TodoTemplete = ({children}) => {
  return (
    <div>
      <div>일정관리</div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default TodoTemplete
