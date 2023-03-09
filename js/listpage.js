let thisPage = 1;
let limit = 4;
let list = document.querySelectorAll('.container .row .col-md-3');

function loadItem() {
    let beinGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if(key >= beinGet && key <= endGet) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();

function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listpage').innerHTML = '';

    if(thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'Prev';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listpage').appendChild(prev);
    }

    for(let i=1; i<count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listpage').appendChild(newPage);
    }

    if(thisPage != count) {
        let next = document.createElement('li');
        next.innerText = 'Next';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listpage').appendChild(next);
    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
}