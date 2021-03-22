import { ADD_CATEGORY_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType";
import axios from "axios";

export const getTodoRequest = () => ({
    type:GET_TODO_REQUEST
})

export const getTodoSuccess = (payload) => ({
    type:GET_TODO_SUCCESS,
    payload
})

export const getTodoFailure = () => ({
    type:GET_TODO_FAILURE
})

export const getTodoData = () => (dispatch) => {
    dispatch(getTodoRequest())
    return axios({
        method:'GET',
        url:"https://aqueous-badlands-15880.herokuapp.com/tasks"
    })
    .then((res) => {
        console.log(res.data)
        dispatch(getTodoSuccess(res.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(getTodoFailure())
    })
}

export const addTaskRequest = () => ({
    type:ADD_TASK_REQUEST
})

export const addTaskSuccess = (payload) => ({
    type:ADD_TASK_SUCCESS,
    payload
})

export const addTaskFailure = () => ({
    type: ADD_TASK_FAILURE
})


export const addTask = (payload,params) => (dispatch) => {
    console.log(payload,params)
    dispatch(addTaskRequest())
    return axios({
        method:"PATCH",
        url:`https://aqueous-badlands-15880.herokuapp.com/tasks/${params}`,
        data:{
            taskItems:payload
        }
    })
    .then((res) => {
        console.log(res);
        //do getData
        dispatch(getTodoData())
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addCategoryRequest = () => ({
    type:ADD_CATEGORY_REQUEST
})

export const addCategorySuccess = (payload) => ({
    type:ADD_CATEGORY_SUCCESS,
    payload
})

export const addCategoryFailure = () => ({
    type:ADD_CATEGORY_FAILURE
})


export const addCategoryData = (payload) => (dispatch) => {
    dispatch(addCategoryRequest())
    return axios({
        method:'POST',
        url:"https://aqueous-badlands-15880.herokuapp.com/tasks/",
        data:payload
    })
    .then((res) => {
        console.log(res)
        // dispatch an action to get data again
        dispatch(getTodoData())
    })
    .catch((err) => {
        console.log(err)
    })
}

export const deleteSuccess = () => ({
    type:DELETE_TASK_SUCCESS
})

export const deleteTodo = (payload,params) => (dispatch) => {
    return axios({
        method:"PATCH",
        url:`https://aqueous-badlands-15880.herokuapp.com/tasks/${params}`,
        data:{
            taskItems:payload
        }
    })
    .then((res) => {
        console.log(res)
        dispatch(deleteSuccess())
        dispatch(getTodoData())
    })
    .catch((err) => {
        console.log(err)
    })
}

export const editTodo = (payload,params) => (dispatch) => {
    return axios({
        method:"PATCH",
        url:`https://aqueous-badlands-15880.herokuapp.com/tasks/${params}`,
        data:{
            taskItems:payload
        }
    }).then((res) => {
        console.log(res)
        dispatch(getTodoData())
    })
    .catch((err) => {
        console.log(err)
    })
}