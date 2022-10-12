import React from 'react'
import Header from '../components/header/Header'
import Form from '../components/form/Form'
import List from '../components/list/List'
import styled from 'styled-components'

const TodoListWrap = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`

const TodoList = () => {
    return (
        <TodoListWrap>
            <Header />
            <Form />
            <List />
        </TodoListWrap>
    )
}

export default TodoList