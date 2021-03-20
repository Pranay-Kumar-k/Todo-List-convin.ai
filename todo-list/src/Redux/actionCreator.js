import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS } from "./actionType";

export const addTaskRequest = () => ({
    type:ADD_TASK_REQUEST
})

export const addTaskSuccess = (payload) => ({
    type:ADD_TASK_SUCCESS
})

export const addTaskFailure = () => ({
    type: ADD_TASK_FAILURE
})
