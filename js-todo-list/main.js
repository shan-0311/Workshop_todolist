// TO DO
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('li').forEach(function(el){
    el.addEventListener('click', function(){
    el.classList.toggle('checked')
    })
  })  
  document.querySelectorAll('.close').forEach(function(de){
    de.addEventListener('click', function(){
    de.parentNode.remove()
    })
  })
})