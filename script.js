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

const alinhamento = (item, classe) => {
  if (classe === 'button-up' || classe === 'p-up') {
    item.classList.add('text-start')
  } else if (classe === 'button-center' || classe === 'p-center') {
    item.classList.add('text-center');
  } else {
    item.classList.add('text-end');
  }
}

const createText = (event) => {
    const inputText = document.querySelector('.input-text');
    const imageConteiner = document.querySelector('.image-container');
    const firstParagraph = document.createElement('p');

    firstParagraph.className = 'textImage'
    firstParagraph.innerText = inputText.value;

    alinhamento(firstParagraph, event.target.className);

    imageConteiner.appendChild(firstParagraph);
    inputText.value = '';
}

const buttonUp = document.querySelector('.button-up');
buttonUp.addEventListener('click', (event) => {
    createText(event);
    meaw.play();
});

const buttonDown = document.querySelector('.button-down');
buttonDown.addEventListener('click', (event) => {
    createText(event);
    meaw.play();
});

const buttonCenter = document.querySelector('.button-center');
buttonCenter.addEventListener('click', (event) => {
    createText(event);
    meaw.play();
});

const opUp = document.querySelector('.p-up');
opUp.addEventListener('click', createText);
const opCentro = document.querySelector('.p-center');
opCentro.addEventListener('click', createText);
const opDown = document.querySelector('.p-down');
opDown.addEventListener('click', createText);

const cleanText = document.querySelector('.clean')
cleanText.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('.textImage');
    paragraphs.forEach((paragraph) => {
        paragraph.innerHTML = '';
    });
    meaw.play();
});

// Window.onload:
window.onload = async () => {
   const gData = await gettingData();
   const gKitty = await createKitty(gData);

   createClickImage();
}
 