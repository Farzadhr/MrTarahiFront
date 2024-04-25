const MyBody = document.querySelector('body')

//open and close mobile menu navbar
var openBtn = document.getElementById("OpenMobileMenu")
var closeBtn = document.getElementById("CloseMobileMenu")
var mobileMenu = document.getElementById("MoblieMenu")
openBtn.addEventListener("click" , ()=>{
    mobileMenu.classList.remove("-right-full")
    mobileMenu.classList.add("right-0")
})
closeBtn.addEventListener("click" , ()=>{
    mobileMenu.classList.remove("right-0")
    mobileMenu.classList.add("-right-full")
})

//set width to height for progressbar
var progressesbar = document.getElementsByClassName("progress-bar")
for(var i = 0 ; i < progressesbar.length;i++){
    progressesbar[i].style.height = getComputedStyle(progressesbar[i]).width
}