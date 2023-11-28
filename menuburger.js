// query the burger
let top_hamburger = document.getElementById('top_hamburger');

// query the x close
let hamburger_close = document.getElementById('hamburger_close');

// query the slide in menu

// query the courdevs small logo


// event listener on the hamburger
top_hamburger.addEventListener('click', function () {
    // test print
    console.log("Hamburger Menu");
    // make burger dissapear
    top_hamburger.classList.add('dissapear');
    // make x appear
    hamburger_close.classList.add('appear');
});
