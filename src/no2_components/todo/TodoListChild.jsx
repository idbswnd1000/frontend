import React, {useContext, useState} from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md"
import styled from 'styled-components'
import { TodoContext } from '../../no0_context/TodoContext'


const TodoListChild = ({ item }) => {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(item.subject)
    const {dispatch} = useContext(TodoContext)

    const handleToggle = () => {

        dispatch({ type: "toggle", payload: item.id })
    }

    const handleUpdate = () => {
        dispatch({
            type: "update",
            payload: {
                id: item.id,
                subject: value
            }
        })

        setEditing(false)
    }

    const handleDelete = () => {
        dispatch({
            type: "delete",
            payload: item.id
        })
    }

    return (
        <TodoItem>
            <IconBox onClick={handleToggle}>
                {item.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </IconBox>

            <Content>
                {editing ? (
                    <EditInput
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={handleUpdate}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleUpdate()
                        }}
                        autoFocus
                    />
                ) : (
                    <Checked
                        $checked={item.checked}
                        onDoubleClick={() => {
                            setEditing(true)
                            setValue(item.subject)
                        }}
                    >
                        {item.subject}
                    </Checked>
                )}
            </Content>

            <DeleteBox onClick={handleDelete}>
                <MdRemoveCircleOutline />
            </DeleteBox>
        </TodoItem>
    )
}

export default TodoListChild

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
`

const IconBox = styled.div`
  font-size: 28px;
  color: #2563eb;
  cursor: pointer;
  display: flex;
`

const Content = styled.div`
  flex: 1;
`

const Checked = styled.div`
  font-size: 18px;
  color: ${({ $checked }) => $checked ? "#94a3b8" : "#1e293b"};
  text-decoration: ${({ $checked }) => $checked ? "line-through" : "none"};
  cursor: pointer;
`

const EditInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
`

const DeleteBox = styled.div`
  font-size: 28px;
  color: #ef4444;
  cursor: pointer;
  display: flex;

  &:hover {
    transform: scale(1.1);
  }
`