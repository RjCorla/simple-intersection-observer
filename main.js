const header = document.querySelector('header');
const banner = document.querySelector('.banner');

const bannerOption = {
  rootMargin: '-100px 0px 0px 0px ',
};

const bannerObserver = new IntersectionObserver((entries, bannerObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scroll');
    } else {
      header.classList.remove('nav-scroll');
    }
  });
}, bannerOption);

bannerObserver.observe(banner);
