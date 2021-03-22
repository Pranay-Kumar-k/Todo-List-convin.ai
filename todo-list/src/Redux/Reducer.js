import { ADD_CATEGORY_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, CHANGE_CATEGORY_FAILURE, CHANGE_CATEGORY_REQUEST, CHANGE_CATEGORY_SUCCESS, DELETE_TASK_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"

const initState = {
    todos:[]
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type) {
        case GET_TODO_REQUEST:
            return {
                ...state
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos:payload
            }
        case GET_TODO_FAILURE:
            return {
                ...state
            }
        case ADD_CATEGORY_REQUEST:
            return {
                ...state
            }
        case ADD_CATEGORY_SUCCESS:
            const newTodo = [...state,payload] 
            return {
                ...state,
                todos:newTodo
            }
        case ADD_CATEGORY_FAILURE:
            return {
                ...state
            }
        case ADD_TASK_REQUEST:
            return {
                ...state
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state
            }
        case ADD_TASK_FAILURE:
            return {
                ...state
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state
            }
        case CHANGE_CATEGORY_REQUEST:
            return {
                ...state
            }
        case CHANGE_CATEGORY_SUCCESS: 
            return {
                ...state
            }
        case CHANGE_CATEGORY_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
} 