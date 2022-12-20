particlesJS("particles-js", {
    particles: {
      number: {
        value: 6,
        density: { enable: true, value_area: 475 }
      },
      color: { value: "#171b37" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 50, height: 50 }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: false, speed: 6, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 114.42640803667955,
        random: true,
        anim: { enable: true, speed: 10, size_min: 40, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 144.30708547789706,
        color: "#ffffff",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 10,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 30 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  

// text animation

gsap.from('.privet', {opacity: 0, duration: 2});
gsap.to('.dev', {text: 'Я начинающий WEB-разработчик.', duration: 3.5, delay: 1, ease: 'power1.inOut'});


//scroll animation

$(window).scroll(function(e){ 
  let $el = $('#fixedElement'); 
  let isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 300 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px', 'width' : '100%'});
    gsap.from(('#fixedElement'), { duration: 2}) 
  }
  if ($(this).scrollTop() < 300 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'}); 
  } 
});

AOS.init({
  duration: 2000,
  delay: 500,
  once: true
})

// menu animation

let mainAnimation = document.querySelector('.myWork');
const nav = document.querySelector('#navbar');
mainAnimation.addEventListener('click', () => {
  nav.style.display = 'block'
})



