var t1=gsap.timeline();
t1.from(".AnimatedSignature",{
    opacity:0,
    duration:2,
    })
t1.from(".RunningText p",{
    opcity:0,
    duration:1,
    stagger:1
})
t1.to(".AnimatedSignature",{
    opacity:0,
    duration:4,
    })
gsap.to(".LeftCurtain",{
    x:"-1500",
    duration:2.5,
    delay:4.5
})
gsap.to(".RightCurtain",{
    x:"1500",
    duration:2.5,
    delay:4.5
})
gsap.to(".UpperCurtain",{
    y:"-1300",
    duration:8,
    delay:4.5
})
gsap.to(".DownCurtain",{
    y:"1300",
    duration:8,
    delay:4.5
})
gsap.to(".LodingAnimation",{
    y:"-1000",
    duration:10,
    delay:6.5
})





// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Page 2 starting

let imgBx =document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".p2_contentBx");

for(let i=0;i<imgBx.length;i++){
    imgBx[i].addEventListener("mouseover",function(){
        for(let i=0; i<contentBx.length; i++){
            contentBx[i].className=`p2_contentBx`;
        }
        document.getElementById(this.dataset.id).className=`p2_contentBx active`;

        for(let i=0;i<imgBx.length;i++){
            imgBx[i].className=`imgBx`;
        }
        this.className=`imgBx active`;
    })
}
console.log(imgBx);



var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

// Page 2 ending

// Page 4 starting



// Page 4 ending