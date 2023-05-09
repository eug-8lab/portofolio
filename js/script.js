const links = document.querySelectorAll('.link');

links[0].addEventListener('click', e => {
    links[0].classList.add('active');
    links[1].classList.remove('active');
    links[2].classList.remove('active');
    links[3].classList.remove('active');
    links[4].classList.remove('active');
})

links[1].addEventListener('click', e => {
    links[0].classList.remove('active');
    links[1].classList.add('active');
    links[2].classList.remove('active');
    links[3].classList.remove('active');
    links[4].classList.remove('active');
})

links[2].addEventListener('click', e => {
    links[0].classList.remove('active');
    links[1].classList.remove('active');
    links[2].classList.add('active');
    links[3].classList.remove('active');
    links[4].classList.remove('active');
})

links[3].addEventListener('click', e => {
    links[0].classList.remove('active');
    links[1].classList.remove('active');
    links[2].classList.remove('active');
    links[3].classList.add('active');
    links[4].classList.remove('active');
})

links[4].addEventListener('click', e => {
    links[0].classList.remove('active');
    links[1].classList.remove('active');
    links[2].classList.remove('active');
    links[3].classList.remove('active');
    links[4].classList.add('active');
})