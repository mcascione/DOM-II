import './less/index.less'

// Your code goes here!
const pickDestinationImg = document.querySelector('.content-destination img');

pickDestinationImg.addEventListener('mouseover', (evt)=>{  
        evt.target.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg');
    setTimeout(() => {
        evt.target.setAttribute('src','http://localhost:9000/img/destination.jpg');
      },1000);
});

