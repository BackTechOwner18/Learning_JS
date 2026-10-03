# PROJECTS 

# Project 1 (Background Color Changer)

## StackBlitz Project Link - 
[Click Here](https://stackblitz.com/edit/stackblitz-starters-aujtbzb3?description=HTML/CSS/JS%20Starter&file=styles.css,index.html,chaiaurcode.js&terminalHeight=10&title=Static%20Starter)

## Solution Code (JS) :


```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') body.style.backgroundColor = e.target.id;
    if (e.target.id === 'white') body.style.backgroundColor = e.target.id;
    if (e.target.id === 'blue') body.style.backgroundColor = e.target.id;
    if (e.target.id === 'yellow') body.style.backgroundColor = e.target.id;
    if (e.target.id === 'purple') body.style.backgroundColor = e.target.id;
    if (e.target.id === 'red') body.style.backgroundColor = e.target.id;
  });
});


```
# Project 2 (BMI Calculator)
## StackBlitz Project Link - [Click here](https://stackblitz.com/edit/stackblitz-starters-trqncjri?file=baseops.js)

## Solution Code (JS) :
```javascript

  const form = document.querySelector('form')

form.addEventListener('submit', function(e)
{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

    if (height==='' || height < 0 || isNaN(height))
    {
        result.innerHTML = `Please enter a valid height - ${height}`
        result.style.color = 'black'
      }
      
      else if (weight==='' || weight < 0 || isNaN(weight))
      {
        result.innerHTML = `Please enter a valid weight - ${weight}`
        result.style.color = 'black'
      }
      else 
      {
        const bmi = ((weight / (height*height))*10000).toFixed(2)
        if (bmi<18.6)
        {
          result.innerHTML = `<span> ${bmi} is ur BMI </span><br><span>you are underweight</span>`
        }
        else if (bmi>=18.6 || bmi <=24.9)
        {
          result.innerHTML = `<span> ${bmi} is ur BMI </span><br><span>you are at normal range</span>`
        }
        if (bmi>24.9)
        {
          result.innerHTML = `<span> ${bmi} is ur BMI </span><br><span>you are overweight</span>`
        }
          result.style.color = 'black'
      }

})

```

# Project 3 (Live Digital Clock)
## StackBlitz Project Link - [Click here](https://stackblitz.com/edit/stackblitz-starters-crr6qjxc?file=baseops.js)

## Solution Code (JS) :
```javascript

const clock = document.querySelector('#clock')

setInterval(function(){
  
  let time = new Date()
  clock.innerHTML = time.toLocaleTimeString('en-IN')
} , 1000)

```

# Project 4 (Guess The Number)
## StackBlitz Project Link - [Click here](https://stackblitz.com/edit/stackblitz-starters-ogujgxhw?description=HTML/CSS/JS%20Starter&file=styles.css,index.html,script.js&terminalHeight=10&title=Static%20Starter)

## Solution Code (JS) :
```javascript

let NumToBeGuessed = parseInt(Math.random()*100 + 1)
const form = document.querySelector('form')
const userInput = document.querySelector('.guessField')
const submit = document.querySelector('#subt')
const lowOrHigh = document.querySelector('.lowOrHi')
const previousGuesses= document.querySelector('.guesses') 
const remaining = document.querySelector('.lastResult')
const start = document.querySelector('.resultParas')

let prevGuesses = []
let remainingGuesses = 10 
let playGame = true

const p = document.createElement('h2')


if (playGame)
{
  submit.addEventListener('click', function(e)
  {
    e.preventDefault()
    let guess = parseInt(userInput.value)
    validateGuess(guess)
  })
  

}
function validateGuess(guess)
{
  if (guess < 1)
  {
    alert( `Please enter a number greater than 1`)
  }
  else if (guess > 100)
  {
    alert(`Please enter a number less than 100`)
  }
  else if (isNaN(guess))
  {
    alert(`Please enter a valid number`)
  }
  else {
    userInput.value =''
      prevGuesses.push(guess)
      remaining.innerHTML = --remainingGuesses
      lowOrHi(guess)
      previousGuesses.innerHTML = prevGuesses
  }
}

function lowOrHi(guess)
{
  if (guess<NumToBeGuessed)
  {
    DisplayMessage(`The value is TOO Low`)
  }
  else if (guess>NumToBeGuessed)
  {
    DisplayMessage(`The value is TOO High`)
  }
  if (guess===NumToBeGuessed)
  {
    DisplayMessage(`Congrats , you won!`)
    endGame()
  }
  if (remainingGuesses === 0)
  {

    endGame()
  }
}

function DisplayMessage(message)
{
  lowOrHigh.innerHTML = `<h3> ${message} </h3>`
}

function endGame(guess)
  {
    guess =''
    userInput.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    playGame = false
    p.setAttribute('class', 'startNewGame')
    p.innerHTML = `<span>Start new game</span>`
    p.classList.add('button')
    start.appendChild(p)
    p.addEventListener('click', function(e)
    {
      newGame()
    })

  }

  function newGame()
  {
    NumToBeGuessed = parseInt(Math.random()*100 + 1)
    prevGuesses = []
    remainingGuesses = 10 
    userInput.removeAttribute('disabled')
    submit.removeAttribute('disabled')
    remaining.innerHTML = remainingGuesses
    lowOrHigh.innerHTML = ''
    previousGuesses.innerHTML= ''
    start.removeChild(p)
    playGame = true
    
  }

```

# Project 5 (Interval BG Changer)

## StackBlitz Project Link - 
[Click Here](https://stackblitz.com/edit/stackblitz-starters-jroqr15h?file=baseops.js)

## Solution Code (JS) :

```javascript 

const body = document.querySelector('body')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
  let colorChanger
function colorChange ()
{ 
  let hex = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0;i< 6 ; i++)
  {
  
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}


//MY LOGIC (NOT WRONG)

  // startButton.addEventListener('click', function(){
  // if (!colorChanger){
  // colorChanger = setInterval(function() {
  //   let randomColorCode = Math.round(Math.random()*900000 + 1)

  //     body.style.backgroundColor = `#${randomColorCode}`

  // }, 1000)}

startButton.addEventListener('click', function(){
  
  if (!colorChanger)
  colorChanger = setInterval(function() {

    let newColor = colorChange()
    body.style.backgroundColor = newColor
    
  }, 1000)

})

  stopButton.addEventListener('click', function (){

    clearInterval(colorChanger)
    colorChanger = null

  })

    //DONE

```


# Project 6 (Key Magic)

## StackBlitz Project Link - 
[Click Here](https://stackblitz.com/edit/stackblitz-starters-4vip5bkn?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)

## Solution Code (JS) :

```javascript 

  

```