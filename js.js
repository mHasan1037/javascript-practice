const forms = document.querySelectorAll('form')
const userName = document.getElementById('input-name')
const userEmail = document.getElementById('input-email')
const userPhone = document.getElementById('input-phone')

const stepNums = document.querySelectorAll('.step-num')
const formSections = document.querySelectorAll('.form-section')
const nextSteps = document.querySelectorAll('.next-step')


//form one submit functionality goes here......
//form one submit functionality goes here......

forms[0].addEventListener('submit', (e)=>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const userNameValue = userName.value
    const userEmailValue = userEmail.value
    const userPhoneValue = userPhone.value


    if(userNameValue === ''){
        setErrorMsg(userName, 'Username can not be blank')
    }else{
        setSuccessMsg(userName)
    }

    if(userEmailValue === ''){
        setErrorMsg(userEmail, 'Email can not be blank')
    }else if(!isEmail(userEmailValue)){
        setErrorMsg(userEmail, 'Email is not valid')
    }else{
        setSuccessMsg(userEmail)
    }

    if(userPhoneValue === ''){
        setErrorMsg(userPhone, 'Phone number is required')
    }else{
        setSuccessMsg(userPhone)
    }

    const personalInfo = {
        userNameValue,
        userEmailValue,
        userPhoneValue
    }

    if(userNameValue !== ''  && userEmailValue !== '' && userPhoneValue !== ''){
        localStorage.setItem('personalInfo', JSON.stringify(personalInfo))
        removeActivs()
        formSections[1].classList.add('active')
        stepNums[1].classList.add('active')

        userName.value = ''
        userEmail.value = ''
        userPhone.value = ''
    }
}

//first form error message goes here...
function setErrorMsg(userName, message){
    const formControl = userName.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'form-control error'
}

//first form successfull submittion here....
function setSuccessMsg(getInput){
    const formControl = getInput.parentElement;
    formControl.className = 'form-control success'
}

userName.addEventListener('focus', ()=>{
    getFocus(userName)
})

userEmail.addEventListener('focus', ()=>{
    getFocus(userEmail)
})

userPhone.addEventListener('focus', ()=>{
    getFocus(userPhone)
})

function getFocus(getInput){
    const formControl = getInput.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = ''
    formControl.className = 'form-control'
}

//If email is not valid this function will be activated
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//select plan seting to localStorage starts from here
const monthly = document.getElementById('monthly')
const yearly = document.getElementById('yearly')
const smallPlan = document.querySelectorAll('.plan-detail small')

let arcade = 9;
let advanced = 12;
let pro = 15;

yearlyPlan()
monthlyPlan()

monthly.addEventListener('change', ()=>{
    monthlyPlan()
})

yearly.addEventListener('change', ()=>{
    yearlyPlan()
})
  var plans1, plans2, plans3

function monthlyPlan(){
    plans1 = smallPlan[0].innerText = `$${arcade}/mo`
    plans2 = smallPlan[1].innerText = `$${advanced}/mo`
    plans3 = smallPlan[2].innerHTML = `$${pro}/mo`
}

var yearPlan1, yearPlan2, yearPlan3

function yearlyPlan(){
    yearPlan1 = smallPlan[0].innerText = `$${arcade * 12}/mo`
    yearPlan2 = smallPlan[1].innerText = `$${advanced * 12}/mo`
    yearPlan3 = smallPlan[2].innerHTML = `$${pro * 12}/mo`
}

//Second form submittion goes here...
forms[1].addEventListener('submit', (e)=>{
    e.preventDefault()
    getSelectPlanData()
    removeActivs()
    formSections[2].classList.add('active')
    stepNums[2].classList.add('active')
})

function getSelectPlanData(){
    let planeOneIs = smallPlan[0].innerText
    let planeTwoIs = smallPlan[1].innerText
    let planeThreeIs = smallPlan[2].innerText

    const selectPlans = {
        planeOneIs,
        planeTwoIs,
        planeThreeIs
    }
    localStorage.setItem('selectPlans', JSON.stringify(selectPlans))
}

//third form submition goes here...
const pickBoxDesces = document.querySelectorAll('.pick-box-desc input')

var onlineService
var largerStorage 
var customizableProfile

pickBoxDesces[0].addEventListener('change', ()=>{
    onlineService = 51;
})
pickBoxDesces[1].addEventListener('change', ()=>{
    largerStorage = 52;
})

pickBoxDesces[2].addEventListener('change', ()=>{
    customizableProfile = 52;
})




const finishingPackage = document.getElementById('finishing-package')
const finishingPickAddOns = document.getElementById('finishing-PickAddOns')
const totalBox = document.querySelector('.total-box')
const getPlanData = JSON.parse(localStorage.getItem('selectPlans'))
const getPickAddOn = JSON.parse(localStorage.getItem('pickAddOns'))

let totalIs = 0


forms[2].addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const pickAddOns = {
        onlineService,
        largerStorage,
        customizableProfile
    }

    localStorage.setItem('pickAddOns', JSON.stringify(pickAddOns))
    pickBoxDesces.forEach(pickBoxDesce => pickBoxDesce.checked = false)

    removeActivs()
    formSections[3].classList.add('active')
    stepNums[3].classList.add('active')


    if (getPlanData.planeOneIs === '$9/mo'){
        finishingPackage.innerHTML = `
        <div class="finish-desc">
            <h4>Arcade (Monthly)</h4>
            <a href="">Change</a>
        </div>
        <p>$<span id="arcadeAmount">9</span>/mo</p>
        `
    }else{
        finishingPackage.innerHTML = `
        <div class="finish-desc">
            <h4>Arcade (Yearly)</h4>
            <a href="">Change</a>
        </div>
        <p>$<span id="arcadeAmount">108</span>/yr</p>
        `
    }

    for(const [key, value] of Object.entries(getPickAddOn)){
        const finishing = document.createElement('div')
        finishing.classList.add('finishing')
        finishing.innerHTML = `
            <div class="finish-desc">
                <h4>${key}</h4>
                <a href="">Change</a>
            </div>
            <p>+$${value}/mo</p>
        `
        let arcadeAmount = Number(document.getElementById('arcadeAmount').innerText)
        totalIs += value
        const finalTotal = totalIs + arcadeAmount
        
        totalBox.innerHTML = `
            <p>Total (per month)</p>
            <h4>+$${finalTotal}/mo</h4>
        `
    
        finishingPickAddOns.appendChild(finishing) 
    }

})

//Forth form submition data goes here...

 
//going back activities starts from here...
const prevBtn = document.querySelectorAll('.prev-btn')
console.log(prevBtn)
prevBtn[2].addEventListener('click', (e)=>{
    e.preventDefault()

    removeActivs()
    formSections[2].classList.add('active')
    stepNums[2].classList.add('active')
})

prevBtn[1].addEventListener('click', (e)=>{
    e.preventDefault()

    removeActivs()
    formSections[1].classList.add('active')
    stepNums[1].classList.add('active')
})

prevBtn[0].addEventListener('click', (e)=>{
    e.preventDefault()

    removeActivs()
    formSections[0].classList.add('active')
    stepNums[0].classList.add('active')
})


//Remove active side headline and active form
function removeActivs(){
    formSections.forEach(formSection => formSection.classList.remove('active'))
    stepNums.forEach(stepNum => stepNum.classList.remove('active'))
}






