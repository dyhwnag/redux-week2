// initial State
const init = {
    todoData: [
        { id: 1, title: 'react', desc: '배워보자', isDone: false },
        { id: 2, title: 'redux', desc: '공부하자', isDone: true }
    ]
}

// Action value
const ADD_TODO = 'ADD_TODO'

const DEL_TODO = 'DEL_TODO'

const TOGGLE_TODO = 'TOGGLE_TODO'

// Action Creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload }
}

export const delTodo = (payload) => {
    return { type: DEL_TODO, payload }
}

export const toggleTodo = (payload) => {
    return { type: TOGGLE_TODO, payload }
}

// Reducer
const todoData = (state = init, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                todoData: [...state.todoData, action.payload]
            }
        case DEL_TODO:
            return {
                todoData: [...state.todoData.filter(todo => todo.id !== action.payload.id)]
            }
        case TOGGLE_TODO:
            return {
                todoData: [...state.todoData.filter(todo => todo.id !== action.payload.id), action.payload]
            }
        default:
            return state
    }
}
export default todoData