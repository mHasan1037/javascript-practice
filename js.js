const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const reduxThunk = require('redux-thunk').default

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
const GET_TODOS_FAIL = 'GET_TODOS_FAIL'

const initialState = {
    isLoading: false,
    todos: [],
    isError: null 
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

const getTodosFail = (error) =>{
    return{
        type: GET_TODOS_FAIL,
        payload: error
    }
}


const todosReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                todos: action.payload,
                isLoading: false
            }
        case GET_TODOS_FAIL:
            return{
                ...state,
                todos: [],
                isError: action.payload
            }
        default:
            state;
    }
}

const fetchData = () =>{
    return (dispatch) =>{
        dispatch(getTodosRequest())
        axios
          .get('https://jsonplaceholder.typicode.com/todos')
          .then((res)=>{
             const todos = res.data;
             const titles = todos.map(todo => todo.title)
             dispatch(getTodosSuccess(titles))
          })
          .catch((err)=>{
             const error = err.message;
             dispatch(getTodosFail(error))
          })
    }
}


const store =  createStore(todosReducer, applyMiddleware(reduxThunk))

store.subscribe(()=>{
   console.log(store.getState())
})

store.dispatch(fetchData())