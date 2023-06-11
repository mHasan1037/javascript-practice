// const {createStore} = require('redux')

// const { options } = require("nodemon/lib/config");

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



const indices = []

const array = ["a", "b", "a", "c", "b", "a", "d", "e"];

const nums = [1, 5, 4, 6, 4, 8, 7, 10]


// let idx = array.indexOf(element)

// while(idx !== -1){
//     indices.push(idx)

//     idx = array.indexOf(element, idx + 1)
// }



let ans = array.fliter((ele, idx)=>{
    return array.indexOf(ele) === idx
})

console.log(ans)




