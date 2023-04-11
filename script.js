// const {createStore} = require('redux')

// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'

// const initialCounterState = {
//     count: 0
// }

// const incrementCounter = () =>{
//     return {
//         type: INCREMENT
//     }
// }

// const decrementCounter = () =>{
//     return {
//         type: DECREMENT
//     }
// }

// const counterReducer = (state=initialCounterState, action) =>{
//     switch(action.type){
//         case INCREMENT:
//             return{
//                 ...state,
//                 count: state.count + 1
//             }

//         case DECREMENT:
//             return{
//                 ...state,
//                 count: state.count - 1
//             }

//         default:
//             state;
//     }
// }

// const store = createStore(counterReducer)

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(incrementCounter())

const { default: axios } = require("axios")
const { applyMiddleware, createStore } = require("redux")
const thunk = require("redux-thunk").default

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
const GET_TODOS_FAILED = 'GET_TODOS_FAILED'
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const getTodosRequest = () =>{
    return{
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos) =>{
    return{
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const getTodosFailed = (error) =>{
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

const createReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                todos: action.payload,
            }
        case GET_TODOS_FAILED:
            return{
                isLoading: false,
                todos: [],
                error: action.payload
            }
        default:
            return state
    }
}

function fetchData(){
    return(dispatch)=>{
        dispatch(getTodosRequest())
        axios.get(API_URL)
        .then(res =>{
            const todos = res.data
            const titles = todos.map(todo => todo.title)
            dispatch(getTodosSuccess(titles))
        })
        .catch(error =>{
            const errorMessage = (error.message)
            dispatch(getTodosFailed(errorMessage))
        })
    }
}


const store = createStore(createReducer, applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchData())








