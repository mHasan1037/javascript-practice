// const {createStore} = require('redux')

const { createStore } = require("redux")

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


const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialCounterState = { count: 0 }

const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const counterReducer = (state = initialCounterState, action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCounter())











