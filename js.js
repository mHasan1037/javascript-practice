const quizDB = [
    {
        question: 'Which among these is not an applications server provided by Spring Boot?',
        a: 'Embedded Tomcat',
        b: 'Jetty',
        c: 'Undertow',
        d: 'Binary link',
        ans: 'ans4'
    },
    {
        question: 'Does Spring Boot in any way reduce the need to write lots of configuration? ',
        a: 'Yes',
        b: 'No',
        c: 'Undecided',
        d: 'No idea',
        ans: 'ans2'
    },
    {
        question: 'Why is it possible to get started with minimum effort on Spring Boost?',
        a: 'Because it has easy to use codes.',
        b: 'Because it is enabled by the Spring framework.',
        c: 'Because it has an opinionated view on Spring platform.',
        d: 'Because it is well explained.',
        ans: 'ans3'
    },
    {
        question: 'Which among these does Spring Boot not provide?',
        a: 'Externalized configuration',
        b: 'Equalizer',
        c: 'Health checks',
        d: 'Metrix',
        ans: 'ans1'
    },
    {
        question: 'The auto-configuration chooses what to create based on the availability of what?',
        a: 'Fork',
        b: 'Files',
        c: 'Beans',
        d: 'Information',
        ans: 'ans2'
    },
]

// const question = document.querySelector('.question')
// const option1 = document.querySelector('#option1')
// const option2 = document.querySelector('#option2')
// const option3 = document.querySelector('#option3')
// const option4 = document.querySelector('#option4')
// const submit = document.querySelector('#submit')

// const answers = document.querySelectorAll('.answer')

// const showScore = document.querySelector('#showScore')

// let questionCount = 0
// let score = 0


// const loadQuestion = () =>{
//     const questionList = quizDB[questionCount]
//     question.innerText = questionList.question
//     option1.innerText = questionList.a
//     option2.innerText = questionList.b
//     option3.innerText = questionList.c
//     option4.innerText = questionList.d
// }

// loadQuestion()

// const getCheckAnswer = () =>{
//     let answer;

//     answers.forEach((curAnsElem)=>{
//         if(curAnsElem.checked){
//              answer = curAnsElem.id
//         }
//     })
//     return answer
// }

// const deselectAll = () =>{
//     answers.forEach(curAnsElem => curAnsElem.checked = false)
// }

// submit.addEventListener('click', ()=>{
//     const checkedAnswer = getCheckAnswer()
    
//     if(checkedAnswer === quizDB[questionCount].ans){
//         score++
//     }

//     questionCount++

//     deselectAll()

//     if(questionCount < quizDB.length){
//         loadQuestion()
//     }else{
//         showScore.innerHTML = `
//            <h3>You scored ${score}/${quizDB.length}</h3>
//            <button class='btn' onclick="location.reload()">Reload</button>
//         `
//         showScore.classList.remove('scoreArea')
//         const innerDiv = document.querySelector('.inner-div')
//         innerDiv.innerHTML = showScore.innerHTML
//     }
// })

const questionIS = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const answers = document.querySelectorAll('.answer')
const submit = document.getElementById('submit')
const showScore = document.getElementById('showScore')


let questionCount = 0
let score = 0

const setQuestions = () =>{
    const questionList = quizDB[questionCount]
    const {question, ans, a, b, c, d} = questionList

    questionIS.innerText = question
    option1.innerText = a
    option2.innerText = b
    option3.innerText = c
    option4.innerText = d
}

setQuestions()

const deleteCheck = () =>{
   answers.forEach(answer => answer.checked = false)
}

deleteCheck()

submit.addEventListener('click', ()=>{

    answers.forEach(answer =>{
        if(answer.checked){
            if(answer.id === quizDB[questionCount].ans){
                score++
            }
        }
    })

    if(questionCount < quizDB.length - 1){
        questionCount++
        deleteCheck()
    }else{
        showScore.innerHTML = `You have answered ${score} questions out of ${quizDB.length}`
    }
    setQuestions()
})









