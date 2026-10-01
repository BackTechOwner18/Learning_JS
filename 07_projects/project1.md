# PROJECTS 

# Project 1

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
# Project 2
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

