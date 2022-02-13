const meaw = new Audio('soundOfCat.mp3');

const gettingData = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=6&page=10&order=Desc`;
    const response = await fetch (url);
    const result = await response.json();
    return result;
}

const createKitty = async (elements) => {
    const ol = document.querySelector('#galeria');
        elements.forEach((element) => {
        const cats= document.createElement('img');
        cats.src = element.url;
        cats.className = 'cats-image';
        ol.appendChild(cats);
    })
}

const createClickImage = async () => {
    const gatos = document.querySelectorAll('.cats-image');
    gatos.forEach((cat) => {
        cat.addEventListener('click', () => {
            const div = document.querySelector('.image-container');
            const newCat = document.createElement('img');

            newCat.src = cat.src;
            newCat.className = 'cat-message';
            
            div.innerHTML = '';
            div.appendChild(newCat);
            meaw.play();
        })
    });
}

const ol = document.querySelector('#galeria');
const botao = document.querySelector('.new-cats');
const img = document.querySelectorAll('.cats-image');
    
botao.addEventListener('click', async () => {
    const func = await gettingData();

    ol.innerHTML = '';
    
    meaw.play();
    await createKitty(func);  
    await createClickImage();
});

const createText = () => {
    const inputText = document.querySelector('.input-text');
    const imageConteiner = document.querySelector('.image-container');
    const firstParagraph = document.createElement('p');
    firstParagraph.className = 'textImage'
    firstParagraph.innerText = inputText.value;
    imageConteiner.appendChild(firstParagraph);
    inputText.value = '';
}

const buttonUp = document.querySelector('.button-up');
buttonUp.addEventListener('click', () => {
    createText();
    meaw.play();
});

const buttonDown = document.querySelector('.button-down');
buttonDown.addEventListener('click', () => {
    createText();
    meaw.play();
});

const buttonCenter = document.querySelector('.button-center');
buttonCenter.addEventListener('click', () => {
    createText();
    meaw.play();
});

const cleanText = document.querySelector('.clean')
cleanText.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('.textImage');
    paragraphs.forEach((paragraph) => {
        paragraph.innerHTML = '';
    });
    meaw.play();
});

window.onload = async () => {
   const gData = await gettingData();
   const gKitty = await createKitty(gData);

   createClickImage();
}
 