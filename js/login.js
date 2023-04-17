let login = document.querySelector('.dn');
let user = document.querySelector('.fa-user');
let closee = document.querySelector('.fa-xmark');


user.onclick = () => {
    login.style.display = "block";
    login.style.opacity = "1";
}
closee.onclick = () => {
    console.log('ok');
    login.style.display = "none";
}

