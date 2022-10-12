import React from 'react'
import styled from 'styled-components'
import Todo from '../todo/Todo'
import { useSelector } from 'react-redux'

const SList = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const List = () => {
    const { todoData } = useSelector((state) => state.todoData)

    return (
        <div>
            <h1>Working🔥🔥🔥</h1>
            <SList>
                {todoData.map((todos) => {
                    if (!todos.isDone) {
                        return <Todo key={todos.id} todos={todos} />
                    } else {
                        return null
                    }
                })}
            </SList>
            <h1>Done🎉🎉🎉</h1>
            <SList>
                {todoData.map((todos) => {
                    if (todos.isDone) {
                        return <Todo key={todos.id} todos={todos} />
                    } else {
                        return null
                    }
                })}
            </SList>
        </div>
    )
}
export default List