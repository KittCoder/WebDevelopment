const url = 'https://api.thecatapi.com/v1/images/search';
const container = document.querySelector('.container');
const BTN = document.querySelector('.BTN');

BTN.addEventListener('click', getCatPicture);

function randomCatPhoto(json) {
    let photoUrl = json[0].url;
    container.classList.add('cats');
    let image = document.createElement('img');
    image.src = photoUrl;
    image.classList.add('randomCats');
    image.alt = photoUrl;
    container.appendChild(image);
}

async function getCatPicture() {
    container.innerHTML = '';
    try {
        const response = await fetch(url);
        const json = await response.json();
        return randomCatPhoto(json);
    }
    catch(err) {
        console.log(err);
    }
}