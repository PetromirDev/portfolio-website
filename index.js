gsap.registerPlugin(ScrollTrigger);

/*HERO*/
gsap.from(".welcomeMessage", {
    scrollTrigger: {
        trigger: ".hero",
        start: "200px center",
        end: "center bottom",
        
    },
    delay: 0.2,
    y: 100,
    opacity: 0,
    duration: 1
});
gsap.from(".welcomeIMG", {
    scrollTrigger: {
        trigger: ".hero",
        start: "200px center",
        end: "center bottom",
        
    },
    delay: 0.2,
    opacity: 0,
    duration: 1
});
/*OFFERS*/
gsap.from(".offer", {
    scrollTrigger: {
        trigger: ".offer",
        start: "-200px center",
        end: "center bottom",
        
    },
    delay: 0.2,
    x: -10,
    opacity: 0,
    duration: 1
});
/*PROJECTS*/
gsap.from("#project1", {
    scrollTrigger:{
        trigger: "#project1",
        start: "-200px center",
        end: "200px center",
        
    },
    delay: 0.2,
    opacity: 0,
    y: 50,
    duration: 1
});
gsap.from("#project2", {
    scrollTrigger:{
        trigger: "#project2",
        start: "-200px center",
        end: "200px center",
        
    },
    delay: 0.2,
    opacity: 0,
    y:50,
    duration: 1
});
gsap.from("#project3", {
    scrollTrigger:{
        trigger: "#project3",
        start: "-200px center",
        end: "200px center",
        
    },
    delay: 0.2,
    y:50,
    opacity: 0,
    duration: 1
});
/*CONTACT*/
gsap.from(".anim1", {
    scrollTrigger:{
        trigger: ".contactForm",
        start: "-300px center",
        end: "200px center",
        
    },
    delay: 0.2,
    x:100,
    opacity: 0,
    duration: 1
});
gsap.from(".anim", {
    scrollTrigger:{
        trigger: ".contactForm",
        start: "-200px center",
        end: "200px center",
        
    },
    delay: 0.2,
    y:50,
    opacity: 0,
    duration: 1
});

/*SCROLL FUNCTIONS*/

function myFunction() {
    var x = document.getElementById("navigation");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "flex";
    }
}
function scroll(id){
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView(); 
}