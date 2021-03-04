const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const skillsDescribe = document.querySelector('.skills-describe')


navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('is-active');
});

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
});

let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

document.body.addEventListener('click', () => {
    skillsDescribe.classList.remove('active');
});


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".intro-img", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".intro-title", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".intro-subtitle", { opacity: 0 }, { opacity: 1, duration: 1 });

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('section:not(.intro)');

sections.forEach(section => {
    gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
    trigger: section,
    start: 'top 20%',
  }});
});