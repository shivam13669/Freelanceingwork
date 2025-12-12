'use strict';
window.defaultJTimer = 10;

window.addEventListener("DOMContentLoaded", () => {
  jInitTab();
  jInitNav();
  resetJTimer();
  jSlideShow();
}, false);

/**
 * reset countdown timer
 */
function resetJTimer() {
  window.jCarouselTimer = window.defaultJTimer;
}

/**
 * slideshow
 */
function jSlideShow() {
  setInterval(() => {
    if (!window.jCarouselTimer) jNext();
    window.jCarouselTimer--;
  }, 1000);
}

/**
 * initialize navigation with event listener
 */
function jInitNav() {
  document.querySelectorAll('.jnav > *').forEach(child => {
    if (child.classList[0] === "back") {
      child.addEventListener('click', jBack)
    } else {
      child.addEventListener('click', jNext);
    }
  });
}

/**
 * initliaize tabs with their data-jid
 */
function jInitTab() {
  let tab = 0;
  const tabs = document.querySelectorAll('.jtabs > *');
  const bodies = document.querySelectorAll('.jcontent > *');
  tabs.forEach(c => {
    bodies[tab].dataset.jid = tab;
    c.dataset.jid = tab;
    c.addEventListener('click', e => jClickActivate(e.target.dataset.jid));
    tab++;
  });

  // set first children to be active
  document.querySelector('.jtabs > *').classList.add('active');
  document.querySelector('.jcontent > *').classList.add('active');
}

/**
 * activate selected tabs
 */
function jClickActivate(e) {
  let current = document.querySelector('.jtabs > .active').dataset.jid;
  // remove 'active' class from current
  document.querySelector('.jtabs > .active').classList.remove('active');
  document.querySelector('.jcontent > .active').classList.remove('active');
  // add active class to selected
  document.querySelectorAll('.jtabs > *')[e].classList.add('active');
  document.querySelectorAll('.jcontent > *')[e].classList.add('active');
  //resetJTimer(); //commented by me
  window.jCarouselTimer = 50; //Added by me
}

/**
 * move to next slide on mouse click
 */
function jNext() {
  let tabLength = document.querySelectorAll('.jtabs > *').length;
  // get current active
  let current = document.querySelector('.jtabs > .active').dataset.jid;
  let tabs = document.querySelectorAll('.jtabs > *');
  let tabBodies = document.querySelectorAll('.jcontent > *');

  tabs[current].classList.remove('active');
  tabBodies[current].classList.remove('active');
  // if current++ is equals to tabLength, then reset the count
  current++;
  if (current === tabLength) current = 0;
  tabs[current].classList.add('active');
  tabBodies[current].classList.add('active');  
  // reset countdowntimer
  resetJTimer();
}

/**
 * move to previous slide on mouse click
 */
function jBack() {
  let tabLength = document.querySelectorAll('.jtabs > *').length;
  // get current active
  let current = document.querySelector('.jtabs > .active').dataset.jid;
  let tabs = document.querySelectorAll('.jtabs > *');
  let tabBodies = document.querySelectorAll('.jcontent > *');

  tabs[current].classList.remove('active');
  tabBodies[current].classList.remove('active');
  // if current++ is equals to tabLength, then reset the count
  current--;
  if (current < 0) current = tabLength-1;
  tabs[current].classList.add('active');
  tabBodies[current].classList.add('active');
  // reset countdown timer
  resetJTimer();
}