console.log('Hello World')


/* burger */

var search_burger= document.querySelector('.burger') 

var navbar= document.querySelector('.navbar')
var leftnav = document.querySelector('.left-nav')
var rightnav = document.querySelector('.right-nav')



var fun= function burgerfun(){
   
  navbar.classList.toggle('h-nav')
  leftnav.classList.toggle('nav-visibility')
  rightnav.classList.toggle('nav-visibility')
 
  

}

search_burger.addEventListener('click',fun)


