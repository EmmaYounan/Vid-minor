  
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


 function inView() {
    var element = document.querySelectorAll(".gifs");
    var windowWidth = window.innerWidth;
    var scrollX = window.scrollX || window.pageXOffset;
    var scrollPosition = scrollX + windowWidth;
    for (var i = 0; i < element.length; i++) {
      var elementPosition = element[i].getBoundingClientRect().left + scrollX + element[i].clientWidth;
      if (scrollPosition > elementPosition) {
        element[i].classList.add("in-view");
      }else if(scrollPosition < elementPosition){
        element[i].classList.remove("in-view"); 
      }
    }
  }
  
  inView();
  document.querySelector(".scroll-container").addEventListener("scroll", inView);