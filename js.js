/* let output = document.querySelector(".output");
let colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    let colorsNew = event.target.dataset.color;
    output.textContent = `Selected color: ${colorsNew}`;
    output.style.color = colorsNew;
}

createButton();

function createButton() {
    let array = [];
    for (let i = 0; i < 60; i++) {
        let createButton = document.createElement("button");
        createButton.type = "button";
        createButton.classList.add("item");
        let newButton = getRandomColor();
        createButton.style.backgroundColor = newButton;
        createButton.dataset.color = newButton;
        array.push(createButton);
    }
    colorPalette.append(...array);
}

function getRandomColor() {
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
    return Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");
} */
const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const gallery = document.querySelector('.gallery');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.preview;
    imgElement.alt = image.description;
    imgElement.dataset.original = image.original;
    gallery.appendChild(imgElement);
});

gallery.addEventListener('click', event => {
    if (event.target.nodeName !== 'IMG') return;

    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('#modal-img');
    const caption = document.querySelector('.caption');
    
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    modalImg.src = event.target.dataset.original;
    caption.textContent = event.target.alt;
});

const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
});