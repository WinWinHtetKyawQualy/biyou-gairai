const splide = new Splide('.splide', {
  type: 'loop',
  pagination: false,
  perPage: 3,
  perMove: 1,
  autoplay: true,
  arrows: true,
  interval: 3000,
  gap: '2rem',
  breakpoints: {
    768: {
      perPage: 1,
    },
  }
});

splide.mount();