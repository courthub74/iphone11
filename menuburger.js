// query the whole menu button
let burger_menu_button = document.querySelector('.burger');

// query the burger
let top_hamburger = document.getElementById('top_hamburger');

// query the x close
let hamburger_close = document.getElementById('hamburger_close');

// query the slide in menu

// query the courdevs small logo


// event listener on the hamburger
burger_menu_button.addEventListener('click', function () {
    // let num = 1 || if top hamburger.dissapear
    // test print
    console.log("Hamburger Menu Button");
    // make burger dissapear
    top_hamburger.classList.toggle('dissapear');
    // make x appear
    hamburger_close.classList.toggle('appear');
});
