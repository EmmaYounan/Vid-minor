  
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
 var aboutButton = document.querySelector(".about-btn")
 var aboutSection = document.querySelector(".about")
 var closeAboutBtn = document.querySelector(".close-about-btn")
 aboutButton.addEventListener('click', function(){
    aboutSection.classList.add("show-about")
 })
 closeAboutBtn.addEventListener('click', function(){
    aboutSection.classList.remove("show-about")
 })
