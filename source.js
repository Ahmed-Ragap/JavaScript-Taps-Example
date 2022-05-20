//select all items i will need here
var allLi = document.querySelectorAll('.ulList li')
var item = document.querySelectorAll('.item')
// loop 
allLi.forEach((l)=>{
    l.addEventListener("click", adding)
    l.addEventListener("click", items)
    })


// function for adding and remove active class 
    function adding(){
        allLi.forEach((l)=>{
        l.classList.remove('active')
        this.classList.add("active")
 })
}
// function for  hide all elements 
    function items(){
     item.forEach((el)=>{
     el.style.display = 'none';
 })
//  show all elements 
 document.querySelectorAll(this.getAttribute('data-filter')).forEach((el) => {
     el.style.display = 'inline'
 })
 }
