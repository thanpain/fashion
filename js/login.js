let login = document.querySelector('.dn');
let user = document.querySelector('.fa-user');
let closee = document.querySelector('.fa-xmark');

user.onclick = () => {
    console.log('ok');
    login.classList.add('active');
}
closee.onclick = () => {
    console.log('ok');
    login.classList.remove('active');
}