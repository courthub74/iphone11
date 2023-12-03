// query the blog 1 button
let blog_button_one = document.getElementById('blog_one');

// query the blog 1 slide in
let blog1content = document.getElementById('blog1content');

// query the blog 1 back button
let blog1back = document.getElementById('blog1back');

// add eventlistener to blog 1 button
blog_button_one.addEventListener('click', function () {
    // Test print
    console.log("Blog One Button");
    // slide the blog 1 content in
    blog1content.classList.toggle('slide_in');
});

// add eventlistener to the back arrow
blog1back.addEventListener('click', function () {
    // Test print
    console.log("Blog One back button");
    // slide the blog 1 content out
    blog1content.classList.toggle('slide_in');
});