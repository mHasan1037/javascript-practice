// const { default: axios } = require('axios')
// const {createStore, applyMiddleware} = require('redux')
// const thunk = require('redux-thunk').default





// const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
// const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
// const GET_TODOS_FAILED = 'GET_TODOS_FAILED'


// const initialTodosState = {
//     isLoading: false,
//     todos: [],
//     error: null,
// }

// const getTodosRequest = () =>{
//     return{
//         type: GET_TODOS_REQUEST
//     }
// }

// const getTodosSuccess = (todos) =>{
//     return{
//         type: GET_TODOS_SUCCESS,
//         payload: todos
//     }
// }

// const getTodosFailed = (error) =>{
//     return{
//         type: GET_TODOS_FAILED,
//         payload: error
//     }
// }

// const todosReducer = (state=initialTodosState, action) =>{
//     switch(action.type){
//         case GET_TODOS_REQUEST:
//             return{
//                 ...state,
//                 isLoading: true
//             }
//         case GET_TODOS_SUCCESS:
//             return{
//                 ...state,
//                 isLoading: false,
//                 todos: action.payload
//             }
//         case GET_TODOS_FAILED:
//             return{
//                 ...state,
//                 isLoading: false,
//                 error: action.payload
//             }
        
//         default:
//             return state;
//     }
// }

// function fetchData(){
//    return(dispatch) =>{
//       dispatch(getTodosRequest())
//       axios.get(API_URL)
//       .then(res =>{
//         const todos = res.data
//         const titles = todos.map(todo => todo.title)
//         dispatch(getTodosSuccess(titles))
//       })
//       .catch(error =>{
//         const errorMessage = (error.message)
//         dispatch(getTodosFailed(errorMessage))
//         console.log(error.message)
//       })
//    }
// }


// const store = createStore(todosReducer, applyMiddleware(thunk))

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(fetchData())








// function BankAccount(customerName, balance = 0){
//    this.customerName = customerName;
//    this.accountNumber = Date.now()
//    this.balance = balance

//    // this.deposite = function(amount){
//    //     this.balance += amount
//    // }

//    // this.withdraw = function(amount){
//    //    this.balance -= amount
//    // }
// }



// const accounts = [];
// const accountForm = document.querySelector('#accountForm');
// const customerName = document.querySelector('#customerName');
// const balance = document.querySelector('#balance');

// const depositForm = document.querySelector('#depositeForm');
// const accountNumber = document.querySelector('#accountNum');
// const amount = document.querySelector('#amount');


// accountForm.addEventListener('submit', (e)=>{
//    e.preventDefault()
//    const account = new BankAccount(customerName.value, +balance.value)
//    accounts.push(account)

//    customerName.value = ''
//    balance.value = ''


//    console.log(accounts)
// })


// depositForm.addEventListener('submit', (e)=>{
//    e.preventDefault()
//    const account = accounts.find(account => account.accountNumber === +accountNumber.value)
//    account.deposite(+amount.value)

//    console.log(accounts)

//    accountNumber.value = ''
//    amount.value = ''
// })






// let pageNo = 1;
// let results = 10;
// let isPageLoading = true

// const container = document.querySelector('.container')
// const getLastUserEl = () => document.querySelector(".container > .person:last-child")

// const loadingEle = document.querySelector('#loading')
// const toggleLoading=(isPageLoading)=>{
//    loadingEle.classList.toggle('show', isPageLoading)
// }



// const getData = async(pageNo, results) =>{
//    const url = await fetch(`https://randomuser.me/api/?page=${pageNo}&results=${results}&seed=abc`)
//    const res = await url.json()
//    return res
// }

// const loadUsers = (pageNo, results) =>{
//    return new Promise((resolve, reject)=>{
//       getData(pageNo, results)
//       .then((res) =>{
//          makeUi(res.results)
//          if(isPageLoading){
//             observeLastUser()
//             isPageLoading = false
//          }
//          resolve("completed rendering")
//       })
//       .catch((error)=>{
//          reject(error)
//       })
//    })
// }

// toggleLoading(true)
// loadUsers(pageNo, results)
// .then((data)=>{
//    toggleLoading(false)
// })
// .catch((error)=> toggleLoading(false))


// function makeUi(res){
//    res.forEach((person, idx)=>{
//       const {gender, name:{first, last}, picture: {medium: profileImg}} = person

//       const personEl = document.createElement('div')
//       personEl.classList.add('person')
//       personEl.innerHTML = `
//         <h3>${first + last}</h3>
//         <p>${gender}</p>
//         <img src=${profileImg} alt=${first + last}/>
//       `
//       container.appendChild(personEl) 
//    }) 
// }



// let options = {
//    root: null,
//    rootMargin: '-15px',
//    threshold: 0.5
// }

// function callBackFunc(entries, observer){
//    const entry = entries[0]

//    if(!entry.isIntersecting) return
//    pageNo+=1
//    toggleLoading(false)
//    loadUsers(pageNo, results).then((resp)=>{
//       observeLastUser()
//       toggleLoading(false)
//    }).catch((error)=>{
//       toggleLoading(true)
//    })
//    observer.unobserve(entry.target)
// }

// const observer = new IntersectionObserver(callBackFunc, options)



// const observeLastUser = () =>{
//    observer.observe(getLastUserEl())
// }







// let url = `http://localhost:3000/persons`

// const tbody = document.querySelector('tbody')
// const form = document.querySelector('form')
// let nameVal = document.getElementById('name')
// let ageVal = document.getElementById('age')
// let statusOption = document.getElementsByName("status_option")

// let idNo;

// async function fetchData(){
//     const res = await fetch(url)
//     const data = await res.json()

//     makeUi(data)

//     idNo = data[data.length - 1].id
// }

// fetchData()

// function makeUi(data){
    

//     data.forEach((acc, idx)=>{
//         const {id, name, age, status} = acc

//         const person = document.createElement('tr')
//         person.setAttribute("id", id)

//         person.innerHTML = `
//         <td>${id}</td>
//         <td class="nameFeild">${name}</td>
//         <td class="ageFeild">${age}</td>
//         <td class="statusFeild">${status === true ? 'Active' : 'Ofline'}</td>
//         <td><button id="edit-btn">Edit</button></td>
//         <td><button id="dltData">Delete</button></td>
//         `
//         tbody.appendChild(person)
//     })
// }


// form.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     let status;
//     for(let i=0; i <= statusOption.length; i++){
//         if(statusOption[i].checked){
//             status = statusOption[i].value
//             break;
//         }
//     }

//     updateData(nameVal.value, ageVal.value, status)

//     nameVal.value = ''
//     ageVal.value =''
// })


// function updateData(name, age, status){
//     // const newStatus = status === "Active" ? true : false

//     // fetch(url, {
//     //     method: "POST",
//     //     body: JSON.stringify({
//     //         id: idNo + 1,
//     //         name,
//     //         age,
//     //         status: newStatus
//     //     }),
//     //     headers: {
//     //         "Content-type": "application/json"
//     //     }
//     // })
//     // .then((res) => res.json())
//     // .then((json)=> console.log(json))

//    const newStatus = status === "Active" ? true : false

//    fetch(url, {
//      method: "POST",
//      body: JSON.stringify({
//         id: idNo + 1,
//         name,
//         age,
//         status: newStatus
//      }),
//      headers: {
//         "Content-type" : "application/json"
//      }
//    })
//    .then((res)=> res.json())
//    .then((json)=> console.log(json))
// }


// const container = document.querySelector('.container')

// container.addEventListener('click', (e)=>{
//     e.preventDefault()

//     let dltBtnPressed = e.target.id == 'dltData'
//     let editBtnPressed = e.target.id == 'edit-btn'

//     let deletedId = e.target.parentElement.parentElement.id

//     if(dltBtnPressed){
//         fetch(`${url}/${deletedId}`, {
//             method: 'DELETE',
//         })
//         .then((res)=> res.json())
//         .then((json)=> location.reload())
//     }

//     if(editBtnPressed){
//         let idIs = e.target.parentElement.parentElement.id
//         let parent = e.target.parentElement.parentElement
//         let nameIs = parent.querySelector('.nameFeild').textContent
//         let ageIs = parent.querySelector('.ageFeild').textContent
//         let status = parent.querySelector('.statusFeild').textContent
//         let newStatus = status === "Active" ? true : false

//         nameVal.value = nameIs
//         ageVal.value = ageIs

//         const submitBtn = document.getElementById('submit')
//         submitBtn.value = 'Update'

//         submitBtn.addEventListener('click', ()=>{
//             fetch(`${url}/${idIs}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name: nameVal.value,
//                     age: ageVal.value,
//                     status: newStatus
//                 })
//             })
//             .then(res => res.json())
//             .then(()=> location.reload())
//         }) 
//     }
// })



const input = document.querySelector('.input')
const defaultText = document.getElementById('default')
const debounceText = document.getElementById('Debounce')
const throttleText = document.getElementById('Throttle')


input.addEventListener('input', (e)=>{
    defaultText.textContent = e.target.value

    updatedThrottleText(e.target.value)
    updatedDebounceText(e.target.value)
})


const updatedThrottleText = throttle((text)=>{
    throttleText.textContent = text
})

const updatedDebounceText = debounce((text)=>{
    debounceText.textContent = text
})

function throttle(cb, delay = 1000){
    let timeout
    return (...args) =>{
        clearTimeout(timeout)
       timeout = setTimeout(()=>{
             cb(...args)
       }, delay)
    }
}


function debounce(cb, delay = 1000){
    let shouldWait = false;
    let waitingArgs;

    const timeoutFunc = () =>{
        if(waitingArgs == null){
            shouldWait = false
        }else{
            cb(...waitingArgs)
            waitingArgs = null

            setTimeout(timeoutFunc, delay)
        }
    }

    return(...args) =>{
       if(shouldWait){
        waitingArgs = args
        return
       }

       cb(...args)
       shouldWait = true

       setTimeout(timeoutFunc, delay)
    }
}






// const updatedDebounceText = debounce((text)=>{
//     debounceText.textContent = text
// })

// const updatedThrottleText = throttle((text)=>{
//     throttleText.textContent = text
// })

// input.addEventListener('input', (e)=>{
//     defaultText.textContent = e.target.value
//     updatedDebounceText(e.target.value)
//     updatedThrottleText(e.target.value)
// })


// function debounce(cb, delay = 1000){
//     let timeout

//     return (...args) =>{
//         clearTimeout(timeout)

//         timeout = setTimeout(()=>{
//             cb(...args)
//         }, delay)
//     }
// }


// function throttle(cb, delay = 1000){
//     let shouldWait = false
//     let waitingArgs
//     const timeoutFunc = ()=>{
//         if(waitingArgs == null){
//             shouldWait = false
//         }else{
//             cb(...waitingArgs)
//             waitingArgs = null
//             setTimeout(timeoutFunc, delay)
//         }
//     }

//     return (...args) =>{
//         if(shouldWait) {
//             waitingArgs = args
//             return
//         }

//         cb(...args)
//         shouldWait = true

//         setTimeout(timeoutFunc, delay)
//     }
// }











