import projects from './projects'

//Navigation menu & burger
const navBurger = document.querySelector('.nav__menu');
const navWrapper = document.querySelector('.nav__wrapper');
const wrappedMenu = document.querySelectorAll('.wrapped_menu > a');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('button');
    navWrapper.classList.toggle('active');
})
wrappedMenu.forEach(a =>{
    a.addEventListener('click', () =>{
        navBurger.classList.remove('button');
        navWrapper.classList.remove('active');
    })
})

// Portfolio projects
const portfolio = document.querySelector('.portfolio');

let getprojects = () =>{
    projects.forEach(el =>{
        portfolio.innerHTML += `
        <div class="project fade-in js-scroll ${el.key}">
                <div class="project__item">
                    <h3>${el.title}</h3>
                    <p>${el.description}</p>
                    <a href="${el.design}" target="_blank">View Live</a>
                    <a href="${el.code}" target="_blank">See Code</a>
                </div>
            </div>`;
    })
}
getprojects();


//Animate on screen
const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight)
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
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      }else {
        hideScrollElement(el);
      }
    })
  }
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })