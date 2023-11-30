// query the whole menu button
let burger_menu_button = document.querySelector('.burger');

// query the burger
let top_hamburger = document.getElementById('top_hamburger');

// query the x close
let hamburger_close = document.getElementById('hamburger_close');

// query the slide in menu

// query the courdevs small logo
let courdevs_top_logo = document.getElementById('courdevs_top_logo');

// query the whole page
let whole_page = document.getElementById('whole_page');


// event listener on the hamburger
burger_menu_button.addEventListener('click', function () {
    // test print
    console.log("Hamburger Menu Button");
    // lock the whole page
    // darken the whole page
    // toggle burger dissapear/re-appear
    top_hamburger.classList.toggle('dissapear');
    // toggle x appear/dissapear
    hamburger_close.classList.toggle('appear');
    // toggle top logo appear/dissapear
    courdevs_top_logo.classList.toggle('appear');
    // toggle menu slide in/slide out
    
});

