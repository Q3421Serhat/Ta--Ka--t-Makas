// **********Selector*********

const selectionArticle = document.querySelector('.selection')

// Seçilen elemanların taşıyıcıları
const yourChoiceDiv = document.getElementById('your-choice')
const pcChoiceDiv = document.getElementById('pc-choice')

// message
const messagePar = document.querySelector('.message')

// score
const scoreCardSection = document.querySelector('.score-card')
const pcScoreSpan = document.getElementById('pc-score')
const yourScoreSpan = document.getElementById('your-score')

// Modal
const modalCardSection = document.querySelector('.modal-card')
const finalMessagePar = document.getElementById('final-message')

/// Button
const playAgainBtn = document.getElementById('play-again')


// ******Variables******
let userSelectImg = document.createElement('img')
let pcSelectImg = document.createElement('img')
let pcRandom

// colors

  const YELLOW = '#ffc538'
  const RED = '#fb778b'
  const GREEN = '#5ab7ac'


// ********Event Listeners***********

selectionArticle.addEventListener('click', (e) => { 
console.log(e.target.id)
if (e.target.id ) {
userSelectImg.src = `./assets/${e.target.id}.png`
userSelectImg.alt = e.target.id
yourChoiceDiv.appendChild(userSelectImg)

createPcSelection() 
}
    })

playAgainBtn.addEventListener('click', () =>{
    //? !!!!!!Üç Yöntemde Olur!!!!!!!

    // modalCardSection.classList.toggle('show')
    // modalCardSection.classList.toggle('remove')
modalCardSection.style.display = 'none'
// Sıfırlamak için; window.location.reload() var ama react ta tercih edilmiyor, şimdilik kullanıldı hoca!!!!!!!!!
window.location.reload()
})



// **********Functions*********

const createPcSelection = () => {
const pcArr = ['rock', 'paper', 'scissor']
    pcRandom = pcArr[Math.floor(Math.random() * 3) ]
    // pcRandom = 'rock' ---ŞİKE
    pcSelectImg.src= `./assets/${pcRandom}.png`
    pcSelectImg.alt = pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)
    calculateResult()

}

const calculateResult = () => {
    // console.log(userSelectImg.alt)
    // console.log(pcSelectImg.alt)

// eşitlik durumu
if (userSelectImg.alt === pcRandom) {
        draw() 

} else { if (userSelectImg.alt ==='rock') {
            pcRandom === 'paper' ? youLost() : youWin() 
        
} else if(userSelectImg.alt === 'scissor') {
        pcRandom === 'rock' ? youLost() : youWin() 
    
} else  if (userSelectImg.alt ==='paper') {
        pcRandom === 'scissor' ? youLost() : youWin() 
}
  }

if(pcScoreSpan.textContent === '10' || yourScoreSpan.textContent === '10') {
    openModal()
    }
}


const draw = () => {
    messagePar.textContent = 'ıts a draw'
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}

const youLost = () => {

 messagePar.textContent = 'You lost'
scoreCardSection.style.color = RED
messagePar.style.backgroundColor = RED
pcScoreSpan.textContent++

}

const youWin = () => {

messagePar.textContent = 'You win'
scoreCardSection.style.color = GREEN
messagePar.style.backgroundColor = GREEN
yourScoreSpan.textContent++

}


// modal aç

const openModal = () => {
modalCardSection.classList.add('show')

if (yourScoreSpan.textContent === '10'){
finalMessagePar.textContent = ' 😎 You Win 🐱‍🏍'
document.querySelector('.modal').style.backgroundColor = GREEN
playAgainBtn.style.color = GREEN
}else{
    finalMessagePar.textContent = ' You Lost😏😱'
    document.querySelector('.modal').style.backgroundColor = RED
    playAgainBtn.style.color = RED  
}


} 



// İlkel Yöntem
// // Resimler

 // const rockImg = document.getElementById('rock')
// const paperImg = document.getElementById('paper')
// const scissorImg = document.getElementById('scissor')


// rockImg.addEventListener('click', () => {
// yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock"> `
// })

// paperImg.addEventListener('click', () => {
// yourChoiceDiv.innerHTML = `<img src="./assets/paper.png" alt="paper"> `
// })

// scissorImg.addEventListener('click', () => {
// yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png" alt="scissor"> `
//  })


// EKSTRA LOCAL STORAGE Kullanımı!! Veri Yazma ve Okuma

// Storage'a Atma: localStorage.setItem('highScore', 5)--Veri Yazma
// Okuma: localStorage.getItem('highScore) veya clg yapıp basmak istersek -- okuma

// localStorage.setItem('highScore', 5)
// console.log(localStorage.getItem('highScore'))


// TOP SCORE ÖDEV