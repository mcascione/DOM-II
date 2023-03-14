import './less/index.less'

// Your code goes here!

window.onload = function () {
    const heading = document.querySelector('.logo-heading');
    heading.textContent = "All Aboard";
}

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        console.log(text)
    })
});

document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = '';
});

const pickDestinationImg = document.querySelector('.content-destination img');

pickDestinationImg.addEventListener('mouseover', (evt) => {   
    evt.target.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg');
    setTimeout(() => {
        evt.target.setAttribute('src','http://localhost:9000/img/destination.jpg');
      },1000);
});

const adventureAwaitsImg = document.querySelector('.img-content');

adventureAwaitsImg.addEventListener('wheel', (evt) => {
    evt.target.style.borderRadius = ('50%');
    setTimeout(() => {
        evt.target.style.borderRadius = ('10%');
      },1000);
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'goldenrod';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#17A2B8'
    })
});




