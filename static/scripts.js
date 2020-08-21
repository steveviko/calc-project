if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

const calculator = document.querySelector('.main-div');
const keys = calculator.querySelector('.calc_keys');


keys.addEventListener('click', e => {
 if (e.target.matches('.ListenToClick')) {
   // take action
  const key = e.target;
  const action = key.dataset.action;

 
    //if key doesnot have action attribute it must be a number key
    if (!action) {
        
        console.log('number key!')
      }
      //If the key has a data-action, is an operator.
      if (
        action === 'plus' ||
        action === 'minus' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }

//if the key’s data-action is decimal, we know the user clicked on the decimal key
      if (action === 'decimal') {
        console.log('decimal key!')
      }
      //if the key’s data-action is clear, we know the user clicked on the clear 
      if (action === 'clear') {
        console.log('clear key!')
      }
      
    //   if the key’s data-action is equals, we know the user clicked on the equal key
      if (action === 'equals') {
        console.log('equal key!')
      }






 }
 

});

const display = document.querySelector('.screen')

keys.addEventListener('click', e => {
  if (e.target.matches('.ListenToClick')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...



    if (!action) {
        if (displayedNum === '0') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }

      if (action === 'decimal') {
        display.textContent = displayedNum + '.'
      }

      if (
        action === 'plus' ||
        action === 'minus' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        key.classList.add('is-depressed')
      }
      keys.addEventListener('click', e => {
        if (e.target.matches('.ListenToClick')) {
          const key = e.target
          // ...
      
          // Remove .is-depressed class from all keys
          Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
        }
      })

      const calculator = document.querySelector('.main-div')
// ...

keys.addEventListener('click', e => {
  if (e.target.matches('.ListenToClick')) {
    // ...

    if (
      action === 'plus' ||
      action === 'minus' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'action'
    }
  }
})

const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'action') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if (action === 'equals') {
    const secondValue = displayedNum
    // ...
  }

  if (
    action === 'plus' ||
    action === 'minus' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // ...
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
  }

  if (action === 'equals') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
  
    display.textContent = calculate(firstValue, operator, secondValue)
  }


  const calculate = (n1, operator, n2) => {
    let result = ''
  
    if (operator === 'plus') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'minus') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
  
    return result
  }
     
  }
})



