  
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
          Array.from(element).forEach(element =>{
              element.classList.remove("in-view")
          })
        element[i].classList.add("in-view");
      }else if(scrollPosition < elementPosition){
        element[i].classList.remove("in-view"); 
      }
    }
  }
  
  inView();
  if(document.querySelector(".scroll-container")){
  document.querySelector(".scroll-container").addEventListener("scroll", inView);
}

    var textWrapper = document.querySelector('.ml6 .letters');
    if(textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
    }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
    });
}