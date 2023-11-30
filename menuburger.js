// query the whole menu button
let burger_menu_button = document.querySelector('.burger');

// query the burger
let top_hamburger = document.getElementById('top_hamburger');

// query the x close
let hamburger_close = document.getElementById('hamburger_close');

// query the slide in menu
let slide_in_menu = document.getElementById('slide_in_menu');

// query the courdevs small logo
let courdevs_top_logo = document.getElementById('courdevs_top_logo');

// query the whole page
let whole_page = document.getElementById('whole_page');

// query the whole body
let whole_body = document.querySelector('body');

// query the you in the floating nav
let you_thing = document.getElementById('you');


// event listener on the hamburger
burger_menu_button.addEventListener('click', function () {
    // test print
    console.log("Hamburger Menu Button");
    // lock the whole body
    whole_body.classList.toggle('lock');
    // darken the whole page below the menu
    whole_page.classList.toggle('darken');
    // toggle burger dissapear/re-appear
    top_hamburger.classList.toggle('dissapear');
    // toggle x appear/dissapear
    hamburger_close.classList.toggle('appear');
    // toggle top logo appear/dissapear
    courdevs_top_logo.classList.toggle('appear');
    // toggle menu slide in/slide out
    slide_in_menu.classList.toggle('slide-in')
    // make floating nav dissapear
    you_thing.classList.toggle('dissapear');
});

