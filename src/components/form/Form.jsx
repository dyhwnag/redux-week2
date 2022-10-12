import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/modules/todoData'

const FormWrap = styled.div`
font-size:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
    
`

const SInput = styled.input`
  font-size: 20px;
  border: 1px solid #0084ff;
  background-color: #ffffff;
  margin: 0 24px;
  height: 40px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`

const SButton = styled.button`
  font-size: 17px;
  color: white;
  border: none;
  background-color: #0084ff;
  height: 40px;
  cursor: pointer;
  width: 120px;
  border-radius: 15px;
`
const Form = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const dispatch = useDispatch();
    const { todoData } = useSelector((state) => state.todoData)

    const onClickHandler = () => {
        if (title === '' && desc === '') return;


        dispatch(addTodo(
            {
                id: maxId,
                title,
                desc,
                isDone: false
            }
        ))

        setTitle('')
        setDesc('')
    }
    return (
        <FormWrap>
            제목
            <SInput type='text' value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} />
            내용
            <SInput type='text' value={desc} onChange={(e) => {
                setDesc(e.target.value)
            }} />
            <SButton onClick={onClickHandler}>추가하기</SButton>
        </FormWrap>
    )
}
export default Form