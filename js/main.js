$(function () {
  var oldNum = '0';

  initialize_owl($('.slideCarousel0'));

  $('.product_tab a').on('click', function (e) {
    e.preventDefault();
    var num = $(this).parent().index();

    //탭 active
    $('.product_tab').removeClass('active');

    //슬라이더 탭 active
    $(this).parent().addClass('active');

    $('.slideTab' + num).show();
    $('.slideTab' + oldNum).hide();

    //슬라이더
    initialize_owl($('.slideCarousel' + num));
    destroy_owl($('.slideCarousel' + oldNum));
    oldNum = num;
  });

  function initialize_owl(el) {
    el.owlCarousel({
      loop: false,
      nav: false,
      items: 2,
      lazyLoad: true,
      smartSpeed: 13000,
      margin: 40,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  }

  function destroy_owl(el) {
    el.trigger('destroy.owl.carousel');
  }
});
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//handle scriolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});
//navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contect');
});
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
//show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

//projects
const workBtnContainaer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.projectfrom');
const projects = document.querySelectorAll('.projects');
workBtnContainaer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  console.log(e.target);
  //Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});
