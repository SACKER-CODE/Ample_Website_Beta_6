// Particle Canvas Animation
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Navigation part
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let particleCount = calculateParticleCount();

class Particle {
  constructor() {
    this.reset();
    this.y = Math.random() * canvas.height;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() / 5 + 0.1;
    this.opacity = 1; // Ensure the initial opacity is set to 1
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.reset();
    }

    if (!this.fadingOut && Date.now() > this.fadeStart) {
      this.fadingOut = true;
    }

    if (this.fadingOut) {
      this.opacity -= 0.008; // Gradually decrease opacity
      if (this.opacity <= 0) {
        this.reset(); // Reset if fully faded out
      }
    }
  }

  draw() {
    const colors = [
      'rgba(255, 0, 0, ',      // Red
      'rgba(0, 255, 0, ',      // Green
      'rgba(0, 0, 255, ',      // Blue
      'rgba(255, 255, 0, ',    // Yellow
      'rgba(255, 0, 255, ',    // Magenta
      'rgba(0, 255, 255, '     // Cyan
    ];

    const color = colors[Math.floor(Math.random() * colors.length)];
    const particleWidth = 5; // Set the desired width
    const particleHeight = Math.random() * 3 + 1; // Set the desired height

    // Ensure the fillStyle is set correctly with opacity
    ctx.fillStyle = `${color}${this.opacity})`; 
    ctx.fillRect(this.x, this.y, particleWidth, particleHeight);
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

function calculateParticleCount() {
  return Math.floor((canvas.width * canvas.height) / 6000);
}

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particleCount = calculateParticleCount();
  initParticles();
}

window.addEventListener("resize", onResize);

initParticles();
animate();

// Swiper Initialization
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesOffsetBefore: 10, // add some offset to the left
    slidesOffsetAfter: 10, // add some offset to the right
    slidesPerView: 'auto', // show 3 slides at a time
    spaceBetween : 0 ,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    loopFillGroupWithBlank: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});

$(document).ready(function() {
  $('#owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots : false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplay: true,
    autoplayTimeout: 3000, // Auto-scroll every 3 seconds
    autoplayHoverPause: true // Pause auto-scroll when hovering over the carousel
  });

  $('#owl-carousel-2').owlCarousel({
    loop: true,
    margin: 10,
    dots : false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplay: true,
    autoplayTimeout: 3000, // Auto-scroll every 3 seconds
    autoplayHoverPause: true, // Pause auto-scroll when hovering over the carousel
    rtl: true
  });
});



$(document).ready(function() {
  $('#owl-carousel-1').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 2
          }
      },
      autoplay: true,
      autoplayTimeout: 3000, // Auto-scroll every 3 seconds
      autoplayHoverPause: true // Pause auto-scroll when hovering over the carousel
  });
});



$(document).ready(function(){
  $("#owl-carousel-dj").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    },
    autoplay: true,
    autoplayTimeout: 1500, // Auto-scroll every 3 seconds
    autoplayHoverPause: true // Pause auto-scroll when hovering over the carousel
  });
});
