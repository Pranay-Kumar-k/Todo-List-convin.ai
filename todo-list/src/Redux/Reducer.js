import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS } from "./actionType"

const initState = {
    todos:["hello","hello"]
}

export const reducer = (state = initState, {type,payload}) => {
    switch(type) {
        case ADD_TASK_REQUEST:
            return {
                ...state
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                todos:payload
            }
        case ADD_TASK_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
} 