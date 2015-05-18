'use strict';

var container = document.querySelector('.gallery'),
    textWrapper = document.querySelector('.highlight'),
    defaultTitle = 'Hello';

// Load file
function requestContent(file) {
    $('.content').load(file + ' .content');
}

// Remove current
function removeCurrentClass(){
    $('.current').removeClass('current');
}

// Update highlight
function updateText(character){
    textWrapper.innerHTML = character;
}

// Add current class
function addCurrentClass(character){
    removeCurrentClass();
    var element = document.querySelector("." + character);
    element.classList.add('current');
}

// Handler for click on images
container.addEventListener('click', function(e) {
    if (e.target != e.currentTarget) {
        e.preventDefault();
        var data = e.target.getAttribute('data-name'),
            url = data + ".html";
        addCurrentClass(data);
        history.pushState(data, null, url);
        updateText(data);
        requestContent(url);
        document.title = "Ghostbuster | " + data;
    }
    e.stopPropagation();
}, false);

// Handler for popstate
window.addEventListener('popstate', function(e) {
    var character = e.state;

    if (character == null) {
        removeCurrentClass();
        textWrapper.innerHTML = " ";
        content.innerHTML = " ";
        document.title = defaultTitle;
    } else {
        updateText(character);
        requestContent(character + ".html");
        addCurrentClass(character);
        document.title = "Ghostbuster | " + character;
    }
});



