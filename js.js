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





// class Node {
//    constructor(data, next = null){
//       this.data = data;
//       this.next = next;
//    }
// }

// class LinkedList {
//    constructor(){
//       this.head = null;
//       this.size = 0;
//    }

//    insertFirst(data){
//       this.head = new Node(data, this.head)
//       this.size++;
//    }

//    insertLast(data){
//       let node = new Node(data)
//       let current;

//       if(!this.head){
//          this.head = node;
//       }else{
//          current = this.head;

//          while(current.next){
//             current = current.next
//          }
//          current.next = node
//       }
//       this.size++
//    }

//    insertAt(data, index){
//       if(index < 0 && index > this.size){
//          return
//       }

//       if(index === 0){
//          this.head = new Node(data, this.head);
//          return
//       }

//       const node = new Node(data);
//       let current, previous;

//       current = this.head;
//       let count = 0;

//       while(count < index){
//          previous = current;
//          count++;
//          current = current.next;
//       }

//       node.next = current;
//       previous.next = node;

//       this.size++
//    }

//    getAt(index){
//       let current = this.head;
//       let count = 0;

//       while(current){
//          if(count == index){
//             console.log(current.data)
//          }
//          count++

//          current = current.next;
//       }
//       return null;
//    }

//    removeAt(index){
//       if(index > 0 && index > this.size){
//          return;
//       }
//       let current = this.head;
//       let previous;
//       let count = 0;

//       if(index === 0){
//          this.head = current.next;
//       }else{
//          while(count < index){
//            count++;
//            previous = current;
//            current = current.next;
//          }
//          previous.next = current.next;
//       }
//       this.size--;
//    }

//    clearList(){
//       this.head = null;
//       this.size = 0
//    }

//    printListData(){
//       let current = this.head;

//       while(current){
//          console.log(current.data)
//          current = current.next
//       }
//    }
// }

// const ll = new LinkedList()

// ll.insertFirst(100)
// ll.insertFirst(150)
// ll.insertFirst(200)
// ll.insertFirst(250)
// ll.insertLast(50)




// ll.insertAt(500, 2)

// ll.printListData()



// const stones = 'aAAbbbb'
// const jewels = "aA"

// function solutionIs(stones, jewels){
//    const similar = []
  
//    for(let i = 0; i < stones.length; i++){
//       for(let j = 0; j < jewels.length; j++){
//          if(jewels[j] === stones[i]){
//             similar.push(stones[i])
//          }
//       }
//    }

//    return similar.length
// }


// console.log(solutionIs(stones, jewels))






const passwordBox = document.getElementById('passwordBox')
const copyBtn = document.getElementById('copyBtn')
const charLength = document.getElementById('charLength')
const rangeInpt = document.getElementById('rangeInpt')
const checkbox = document.querySelectorAll(".checkbox")
const generatePassBtn = document.getElementById("generatePassBtn")
const passStrength = document.getElementById("passStrength")

let charAt = ""
let generatedPassword = ""


rangeInpt.addEventListener('change', (e)=>{
   charLength.innerHTML = e.target.value
})

checkbox.forEach((check)=>{
   check.addEventListener('change', ()=>{
      switch(check.dataset.check){
         case 'Include Uppercase letters':
            charAt += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
         case 'Include Lowercase letters':
            charAt += 'abcdefghijklmnopqrstuvwxyz';
            break;
         case 'Include Numbers':
            charAt += '0123456789';
            break;
         case 'Include Symbols':
            charAt += '!@#$%^&*()';
            break;
         default:
            break;
      }
   })
})



generatePassBtn.addEventListener('click', ()=>{
   const len = rangeInpt.value

   generatedPassword = ""
   for(let i = 0; i < len; i++){
      const randomIndex = Math.floor(Math.random() * charAt.length)
      generatedPassword += charAt[randomIndex]
   }

   passwordBox.innerHTML = generatedPassword

   let strengthIs = ''

   if(len <= 4){
      strengthIs = 'Very weak'
   }else if(len <= 8){
      strengthIs = 'Weak'
   }else if(len <= 12){
      strengthIs = 'Medium'
   }else if(len <= 16){
      strengthIs = 'Strong'
   }else{
      strengthIs = 'Very Strong'
   }

   passStrength.innerHTML = strengthIs
})

copyBtn.addEventListener('click', ()=>{
   let password = passwordBox.innerHTML

   navigator.clipboard.writeText(password)

   copyBtn.innerHTML = 'Copied'

   setTimeout(()=>{
      copyBtn.innerHTML = 'Copy'
   }, 1000)
})








