// query the whole page
let whole_page_portfolio = document.querySelector('body');

// query the app1content
let app1content = document.getElementById('app1content');

// query the app1 button
let app1button = document.getElementById('app_1');

// add event listener to app 1 button
app1button.addEventListener('click', function () {
    // test print
    console.log("APP 1 content button");
    // freeze whole page
    whole_page_portfolio.classList.toggle('lock');
});