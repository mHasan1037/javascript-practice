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




let pageNo = 1;
let results = 10;
let isLoading = true;

const container = document.querySelector('.container')
const getLastUserEl = () => document.querySelector('.container > .person:last-child')

const loadingEle = document.querySelector('#loading')
const toggleLoading = (isLoading) =>{
    loadingEle.classList.toggle('show', isLoading)
}

async function fetchData(pageNo, results){
     const res = await fetch(`https://randomuser.me/api/?page=${pageNo}&results=${results}&seed=abc`)
     const data = await res.json()

     return data && data.results
}


const loadUsers = (pageNo, results) =>{
    return new Promise((resolve, reject)=>{
        fetchData(pageNo, results).then((data)=>{
            makeUi(data)
            if(isLoading){
                observeLastUser()
                isLoading = false
            }
           
            resolve('rendering completed')
        }).catch((error)=>{
            reject(error)
        })
    })
    
}

toggleLoading(true)
loadUsers(pageNo, results)
.then((data)=>{
    toggleLoading(false)
}).catch((error)=>{
    toggleLoading(false)
})


function makeUi(data){
    data.forEach((person)=>{
        const {gender, name: {first, last}, picture: {medium: profileImg}} = person

        const personEl = document.createElement('div')
        personEl.classList.add('person')
        personEl.innerHTML = `
            <h3>${first + last}</h3>
            <p>${gender}</p>
            <img src=${profileImg} alt=${first + last}/>
        `
        container.appendChild(personEl) 
    })
}

let options = {
    root: null,
    rootMargin: '-20px',
    threshold: 0.5
}

const observer = new IntersectionObserver(callbackFunc, options)

function callbackFunc(entries, observer){
      const entry = entries[0]

      if(!entry.isIntersecting) return

      pageNo += 1
      loadUsers(pageNo, results).then((res)=>{
        observeLastUser()
        toggleLoading(false)
      }).catch((error)=>{
        toggleLoading(true)
      })
      
    observer.unobserve(entry.target)
}

const observeLastUser = () =>{
    observer.observe(getLastUserEl())
}










