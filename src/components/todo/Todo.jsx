import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { delTodo, toggleTodo } from '../../redux/modules/todoData'
import { Link } from 'react-router-dom'


const TodoWrap = styled.div`
`
const SBtnWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const STextWrap = styled.div`
    margin-left: 35px;
    margin-top: 10px;
`
const TodoList = styled.div`
  width: 300px;
  height: 220px;
  border:3px solid #0084ff;
  border-radius: 10px;
  margin-right: 13px;
  margin-bottom: 13px;

`
const SButton1 = styled.button`
  border:1px solid #b40000;
  width: 100px;
  height: 40px;
  margin-right: 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
`
const SButton2 = styled.button`
  border:1px solid #0c9200;
  width: 100px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
`
const SLink = styled(Link)`
    text-decoration: none;
    color: #636363;
`
const Todo = ({ todos }) => {
    const dispatch = useDispatch();

    return (
        <TodoWrap>
            <TodoList>
                <STextWrap>
                    <SLink to={`/detail/${todos.id}`}>상세보기</SLink>
                    <h1>{todos.title}</h1>
                    <p>{todos.desc}</p>
                </STextWrap>

                <SBtnWrap>
                    <SButton1 onClick={() => {
                        dispatch(delTodo(todos))
                    }}>삭제</SButton1>
                    <SButton2 onClick={() => {
                        todos.isDone = !todos.isDone
                        dispatch(toggleTodo(todos))
                    }}>{todos.isDone ? '취소' : '완료'}</SButton2>
                </SBtnWrap>
            </TodoList>
        </TodoWrap>

    )
}

export default Todo