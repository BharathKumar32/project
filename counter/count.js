const head = document.getElementById('idk')
const dec = document.getElementById('dec')
const inc = document.getElementById('inc')


var c=0
dec.addEventListener('click',function(){
   c--
   Count.textcontent = c
})
inc.addEventListener('click',function(){
   c++
   Count.textcontent = c
})