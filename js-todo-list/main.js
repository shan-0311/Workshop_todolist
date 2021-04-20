// TO DO
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('li').forEach(function(el){
el.addEventListener('click', function(){
  el.classList.toggle('checked')
})
  })  
  
  })