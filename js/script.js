
const text = `Après 8 années passées en Suisse à travailler dans la vente et le commerce, dont plusieurs années en tant que responsable adjointe d’un point de vente, j’ai eu la chance de gérer des équipes, prendre de nombreuses responsabilités, voyager, élargir mon réseau et apprendre à garder le cap même dans des environnements exigeants.

Ce parcours m’a forgée : il m’a appris la rigueur, le sens de l’organisation, la gestion du stress (et parfois des clients pas toujours faciles 😉) et surtout l’importance de toujours chercher à progresser.

Mais au fond, une passion n’a jamais cessé de m’accompagner : l’informatique. C’est ce qui m’a poussée à me lancer dans une reconversion et à reprendre des études ambitieuses dans le développement web, avec une spécialisation qui me tient particulièrement à cœur : la cybersécurité.

Aujourd’hui, je mets à profit mon expérience humaine et professionnelle pour avancer dans ce domaine qui allie logique, créativité et défis permanents… exactement ce que j’aime !`;

let index = 0;
const speed = 25;
const target = document.getElementById("typed-text");

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;


const logos = document.querySelectorAll('.hard-logo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

logos.forEach(logo => observer.observe(logo));


document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("bigbang-video");
  const intro = document.getElementById("video-intro");

  function hideIntro() {
    intro.classList.add("hidden");
    setTimeout(() => {
      intro.style.display = "none"; 
    }, 1000);
  }

  video.addEventListener("timeupdate", function() {
    if (video.currentTime >= 9) { 
      hideIntro();
    }
  });

  
  video.play().catch(() => {
    console.log("Lecture automatique bloquée par le navigateur");
  });
});


