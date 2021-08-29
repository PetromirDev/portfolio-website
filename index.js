var mobile = document.getElementById("mobile-nav");
var navbar = document.getElementById("navbar")
window.addEventListener('resize', function() {
  if(document.body.clientWidth > 768){
    mobile.style.display = "flex";
    navbar.style.display = "flex"
  }
  else{
    mobile.style.display = "none"
  }
}, true);
var navItems = document.getElementsByClassName("nav-item")    
function menu(){
  if(document.body.clientWidth < 768){
    if(mobile.style.display == "none"){
      mobile.style.display = "flex";
      navbar.style.display = "none"
    }
    else{
      mobile.style.display = "none"
      navbar.style.display = "flex"
    }
  }
}
for (i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", menu);
}
const scrollElements = document.querySelectorAll(".scroll");
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }

  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });