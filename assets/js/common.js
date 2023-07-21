// Accordion

const AccorTitles = Array.from(document.querySelectorAll(".accor-item"));

AccorTitles.forEach(function (title) {
  title.addEventListener("click", function () {
    this.classList.toggle("active-accor");
  });
});

// matchHeight
// $(".treatments-list p").matchHeight();


// Table swipe
// Get the width & height of the viewport
const screenWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// define the screen width
const smallScreenThreshold = 768;

window.addEventListener('scroll', function() {
  const swipeBtn = document.getElementById('swipe-btn');
  const tableSection = document.getElementById('tableSection');
  
  const scrollPosition = window.scrollY || window.pageYOffset;
  const sectionOffsetTop = tableSection.offsetTop;
  const sectionHeight = tableSection.offsetHeight;
  

  if (screenWidth < smallScreenThreshold) {
    if (scrollPosition > (sectionOffsetTop) && scrollPosition < (sectionOffsetTop + sectionHeight - windowHeight)) {
      swipeBtn.style.display = 'block';
    } else {
      swipeBtn.style.display = 'none';
    }
  }
});


// Back to top
const toTopBtn = document.getElementById('to-top');
const footer = document.getElementById('footer');

window.addEventListener('scroll', function(){

  // Scroll height > 100px ?
  if(window.scrollY > 100){
    toTopBtn.classList.add('show');
  } else {
    toTopBtn.classList.remove('show');
  }

  // Footer partially visible ?
  if (isPartiallyVisible(footer)) {
    footer.classList.add("ftr-visible");
    } else {
    footer.classList.remove("ftr-visible");
  }

  // Footer is partially visible
  function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    return ((top + height >= 0) &&
    (height + window.innerHeight >= bottom));
  }
});

toTopBtn.addEventListener('click', function(){
  window.scrollTo({ top: 0, behavior: 'smooth'});
});



// ************************************************* //
// --------------- Hamburger Menu ------------------- //
// ************************************************* //

const hamburgerMenu = document.getElementById("sp-menu");
const bodyElement = document.querySelector("body");
const spMenuList = document.querySelectorAll("#sp-menu-contact .meun-list a");
const spMenuListArr = Array.prototype.slice.call(spMenuList);
const spCyanList = document.querySelectorAll("#sp-menu-contact .hdr-contact-list a.home-anchor");
const spCyanListArr = Array.prototype.slice.call(spCyanList);

// Clicking hamburger menu
hamburgerMenu.addEventListener("click", menuToggle);

// Clicking menu items
for (var i = 0, len = spMenuListArr.length; i < len; i++) {
  spMenuListArr[i].addEventListener("click", removeActive);
}

// Clicking menu side items
for (var i = 0, len = spCyanListArr.length; i < len; i++) {
  spCyanListArr[i].addEventListener("click", removeActive);
}

// Toggling "menu-active"
function menuToggle() {
  bodyElement.classList.toggle("menu-active");
}

// Removing "menu-active"
function removeActive(){
  bodyElement.classList.remove("menu-active");
}

// ------------------------------------------------//
// ---------------- Modal Boxes--------------------//
// ------------------------------------------------//

const modalTitles = document.querySelectorAll(".modal-switcher");
const modalOffBotton = document.querySelectorAll(".cancel-modal");
const modalOffbg = document.querySelectorAll(".cancel-modal-bg");

modalTitles.forEach((el) => el.addEventListener("click", function () {
  const clickModal = el.getAttribute("data-key");
  const modalToShow = document.getElementById(clickModal);
  modalToShow.classList.add("show-modal");
  })
);
modalOffBotton.forEach((el) =>
  el.addEventListener("click", function () {
    const clickModal = el.getAttribute("data-key");
    const elem = document.getElementById(clickModal);
    elem.classList.remove("show-modal");
  })
);
modalOffbg.forEach((el) => {
  el.addEventListener("click", function (event) {
    if (event.target === el) {
      const clickModal = el.getAttribute("data-key");
      const elem = document.getElementById(clickModal);
      elem.classList.remove("show-modal");
    }
  });
});
