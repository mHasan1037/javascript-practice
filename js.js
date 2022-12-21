const section = document.querySelector('section')
const playerLivesCount = document.querySelector('span')
let playerLives = 6

playerLivesCount.textContent = playerLives

const getData = () => [
    { imgSrc: 'tree.jpg', name: 'tree'},
    { imgSrc: 'shoping.jpg', name: 'shoping'},
    { imgSrc: 'reinhart.jpg', name: 'reinhart'},
    { imgSrc: 'meeting.jpg', name: 'meeting'},
    { imgSrc: 'markus.jpg', name: 'markus'},
    { imgSrc: 'banner-7.png', name: 'banner-7'},
    { imgSrc: 'greytshirt.jpg', name: 'greytshirt'},
    { imgSrc: 'greyhoddie.jpg', name: 'greyhoddie'},
    { imgSrc: 'tree.jpg', name: 'tree'},
    { imgSrc: 'shoping.jpg', name: 'shoping'},
    { imgSrc: 'reinhart.jpg', name: 'reinhart'},
    { imgSrc: 'meeting.jpg', name: 'meeting'},
    { imgSrc: 'markus.jpg', name: 'markus'},
    { imgSrc: 'banner-7.png', name: 'banner-7'},
    { imgSrc: 'greytshirt.jpg', name: 'greytshirt'},
    { imgSrc: 'greyhoddie.jpg', name: 'greyhoddie'}
    // { imgSrc: 'gilles.jpg', name: 'gilles'},
    // { imgSrc: 'francis.jpg', name: 'francis'},
    // { imgSrc: 'domenico.jpg', name: 'domenico'},
    // { imgSrc: 'charles.jpg', name: 'charles'},
    // { imgSrc: 'chameleon.jpg', name: 'chameleon'},
    // { imgSrc: 'car.png', name: 'car'},
    // { imgSrc: 'blacktshirt.jpg', name: 'blacktshirt'},
    // { imgSrc: 'blackhoddie.jpg', name: 'blackhoddie'},
]

const randomize = () =>{
    const cardData = getData()
    cardData.sort(()=> Math.random() - 0.5)
    return  cardData
}

const cardGenerator = () =>{
    const cardData = randomize()

    cardData.forEach((item) =>{
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        face.src = item.imgSrc;
        card.setAttribute('name', item.name)

        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener('click', (e)=>{
            card.classList.toggle('toggleCard')
            checkCards(e)
        })
    })
}

const checkCards = (e) =>{
    const clickedCard = e.target;
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard')

    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('match')
            flippedCards.forEach(card =>{
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none'
            })
            playerLives++;
            playerLivesCount.textContent = playerLives;
        }else{
            console.log('wrong')
            flippedCards.forEach((card)=>{
                card.classList.remove('flipped');
                setTimeout(()=> card.classList.remove('toggleCard'), 1000)
            })
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart('Try again')
            }
        }
    }
    if(toggleCard.length === 16){
        restart('You won')
    }
}

const restart = (text) =>{
   let cardData = randomize()
   let faces = document.querySelectorAll('.face');
   let cards = document.querySelectorAll('.card');
   section.style.pointerEvents = 'none'
   cardData.forEach((item, index)=>{
    cards[index].classList.remove('toggleCard');
    setTimeout(()=>{
        cards[index].style.pointerEvents = 'all';
        faces[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
        section.style.pointerEvents = 'all'
    }, 1000)
   })
   playerLives = 6;
   playerLivesCount.textContent = playerLives;
   setTimeout(()=> window.alert(text), 100);
}

cardGenerator()

