import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const StWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StProducts = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 300px;
    border:1px solid #acacac;
`

const StTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const StBottom = styled.div`
    padding-left: 10px;
`

const SButton = styled.button`
    border: 1px solid black;
    border-radius: 10px;
`

const Detail = () => {

    const navigate = useNavigate()
    const { todoData } = useSelector((state) => state.todoData)
    const { id } = useParams()
    const todoId = todoData.filter(todo => todo.id === Number(id))[0]

    return (
        <StWrap>
            <StProducts>
                <StTop>
                    <div>id : {todoId.id}</div>
                    <SButton onClick={() => navigate('/')}>이전으로</SButton>
                </StTop>
                <StBottom>
                    <h2>{todoId.title}</h2>
                    <p>{todoId.desc}</p>
                </StBottom>
            </StProducts>
        </StWrap>
    )
}
export default Detail