const evt = new Event('chacha');

document.querySelector('button')
addEventListener('chacha', function(){
  alert('check evnet howa')
})

document.querySelector('button').dispatchEvent('chacha')