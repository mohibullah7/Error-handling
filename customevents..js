// let evt = new Event('chacha');

// document.querySelector('button')
// addEventListener('chacha', function(){
//   alert('check evnet howa')
// })

// document.querySelector('button').dispatchEvent('chacha')


// Select the elements


let eventDiv = document.querySelector('#eventDiv');
let messageDiv = document.querySelector('#message');

// Create a custom event called 'customClick'
let customClickEvent = new Event('customClick');

// Add an event listener to the div for the custom event
eventDiv.addEventListener('customClick', function() {
    messageDiv.textContent = 'Custom event triggered!';
    messageDiv.style.color = 'green';
});

// Add a click event listener to trigger the custom event
eventDiv.addEventListener('click', function() {
    eventDiv.dispatchEvent(customClickEvent);
});



let first = document.querySelector('#apnaevent')
let second = document.querySelector('#showkro')

let ApEvent = new Event('ApnaEvent')

first.addEventListener('ApnaEvent' ,function(){
  second.textContent='yes my event is working'
      second.style.color='blue'
})

first.addEventListener('click',function(){
  first.dispatchEvent(ApEvent)
})


let btnAction = document.querySelector('#btn')
let show = document.querySelector('#showValue')

let customEvent = new Event('customEvent')

btnAction.addEventListener('customEvent',function (){
  show.textContent= 'This is custom event working';
  show.style.color='red'
})
btnAction.addEventListener('click' , function(){
  btnAction.dispatchEvent(customEvent)
})


const action = document.querySelector('#bt')
const rslt = document.querySelector('#sh')

const Cstm  = new Event('cstm')

action.addEventListener('cstm',function(){
  rslt.textContent=3000
  rslt.style.color='yellow'
})

action.addEventListener('click', function (){
  action.dispatchEvent(Cstm)
})