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


// NOW lets code the links to work properly

// query the home link
let home_select = document.getElementById('home_menu_mobile');

// add event listener to home
home_select.addEventListener('click', function () {
    // Test Print
    console.log("Home Select Link");
    // unlock the whole body
    whole_body.classList.toggle('lock');
    // undarken the whole page below the menu
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

// query the about section
let about_section = document.getElementById('about_menu_mobile');

// add event listener to about section
about_section.addEventListener('click', function () {
    // Test Print
    console.log("About Select Link");
    // unlock the whole body
    whole_body.classList.toggle('lock');
    // undarken the whole page below the menu
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

// query the portfolio button
let portfolio_select = document.getElementById('portfolio_menu_mobile');

// add an event listener portfolio
portfolio_select.addEventListener('click', function () {
    // Test Print
    console.log("Portfolio Select Link");
    // unlock the whole body
    whole_body.classList.toggle('lock');
    // undarken the whole page below the menu
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

// query the skills button
let skills_select = document.getElementById('skills_menu_mobile');

// add an event listener skills
skills_select.addEventListener('click', function () {
    // Test Print
    console.log("Skills Select Button");
    // unlock the whole body
    whole_body.classList.toggle('lock');
    // undarken the whole page below the menu
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

// query the experience button
let experience_select = document.getElementById('experience_menu_mobile');

// add an eventlistener experience
experience_select.addEventListener('click', function () {
    // Test Print
    console.log("Experience Select Button");
    // unlock the whole body
    whole_body.classList.toggle('lock');
    // undarken the whole page below the menu
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

// query the blog button
let blog_select = document.getElementById('blog_menu_mobile');

blog_select.addEventListener('click', function () {
    // unlock the whole body
    whole_body.classList.toggle('lock');
    // undarken the whole page below the menu
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


// query the contact button
let contact_select = document.getElementById('contact_menu_mobile');

// add an eventlistener contact
contact_select.addEventListener('click', function () {
    // unlock the whole body
    whole_body.classList.toggle('lock');
    // undarken the whole page below the menu
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