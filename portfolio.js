// query the whole page
let whole_page_portfolio = document.querySelector('body');

// APP 1 SLIDE IN

// query the app1content
let app1content = document.getElementById('app1content');

// query the app1 button
let app1button = document.getElementById('app_1');

// query the back arrow
let app1back = document.getElementById('app1_back_arrow');

// add event listener to app 1 button
app1button.addEventListener('click', function () {
    // test print
    console.log("APP 1 content button");
    // freeze whole page
    whole_page_portfolio.classList.toggle('lock');
    // slide the appcontent in (change the class)
    app1content.classList.toggle('slide_in');
});

// add event listener to app 1 back button
app1back.addEventListener('click', function () {
    // freeze whole page
    whole_page_portfolio.classList.toggle('lock');
    // slide the appcontent in (change the class)
    app1content.classList.toggle('slide_in');
});

// APP 2 SLIDE IN

// query the app1content
let app2content = document.getElementById('app2content');

// query the app1 button
let app2button = document.getElementById('app_2');

// query the back arrow
let app2back = document.getElementById('app2_back_arrow');

// add event listener to app 1 button
app2button.addEventListener('click', function () {
    // freeze whole page
    whole_page_portfolio.classList.toggle('lock');
    // slide the appcontent in (change the class)
    app2content.classList.toggle('slide_in');
});

// add event listener to app 1 back button
app2back.addEventListener('click', function () {
    // freeze whole page
    whole_page_portfolio.classList.toggle('lock');
    // slide the appcontent in (change the class)
    app2content.classList.toggle('slide_in');
});


