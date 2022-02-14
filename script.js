// const meaw = new Audio('soundOfCat.mp3');

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

//Limpar texto:
function clearText() {
const cleanText = document.querySelector('.clean')
cleanText.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('.textImage');
    paragraphs.forEach((paragraph) => {
        paragraph.innerHTML = '';
    });
    meaw.play();
});
}

// Tentativa de fazer o botão de download:
// Link de referência para download: https://dev.to/cjuniordev/transformando-html-em-imagens-2k5e

const download = () => {
    // const imageConteiner = document.querySelector('.image-container');
    // const convertImage = imageConteiner.innerHTML;
  let btnGenerate = document.querySelector('.image-container');
  let btnDownload = document.querySelector('.download');
  btnGenerate.addEventListener('click', () => {
  html2canvas(document.querySelector(".preview")).then(canvas => {
  btnDownload.href = canvas.toDataURL('image/png');
  btnDownload.download = 'minha-imagem';
  btnDownload.click();
  })
  });
}
    
// Muda cor das letras do texto plotado:
// pink:
const changeColorPink = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.color = 'blue');
}
const pink =document.querySelector('.decoration');
pink.addEventListener('click', changeColorPink);

// purple:
const changeColorPurple = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.color = 'purple');
}
const purple =document.querySelector('.decoration1');
purple.addEventListener('click', changeColorPurple);

// green:
const changeColorGreen = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.color = 'green');
  }
const green =document.querySelector('.decoration2');
green.addEventListener('click', changeColorGreen);

// red:
const changeColorRed = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.color = 'red');
}
const red =document.querySelector('.decoration3');
red.addEventListener('click', changeColorRed);

// yellow:
const changeColorYellow = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.color = 'yellow');
}
const yellow =document.querySelector('.decoration4');
yellow.addEventListener('click', changeColorYellow);

// white:
const changeColorWhite = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.color = 'white');
}
const white =document.querySelector('.decoration5');
white.addEventListener('click', changeColorWhite);

//Muda fonte da letra:
    
// 1 
const changeFont = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontFamily = "Impact,Charcoal,sans-serif");
}
const font = document.querySelector('.font');
font.addEventListener('click', changeFont);
    
// 2
const changeFont1 = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontFamily = "Patrick Hand, cursive");
}
const font1 = document.querySelector('.font1');
font1.addEventListener('click', changeFont1);
    
// 3 
const changeFont2 = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontFamily = "Bad Script, cursive");
}
const font2 = document.querySelector('.font2');
font2.addEventListener('click', changeFont2);
    
// 4
const changeFont3 = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontFamily = "Sacramento, cursive");
}
const font3 = document.querySelector('.font3');
font3.addEventListener('click', changeFont3);
    
// Tamanho da letra:
//35px:
const changeSize1 = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontSize = '35px');
}
const size1 = document.querySelector('.size1');
size1.addEventListener('click', changeSize1);
    
//45px:
const changeSize2 = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontSize = '45px');
}
const size2 = document.querySelector('.size2');
size2.addEventListener('click', changeSize2);
    
//55px:
const changeSize3 = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontSize = '55px');
}
const size3 = document.querySelector('.size3');
size3.addEventListener('click', changeSize3);
    
//65px:
const changeSize4 = () => {
  const write = document.querySelectorAll('.textImage');
  write.forEach((eachWrite) => eachWrite.style.fontSize = '65px');
}
const size4 = document.querySelector('.size4');
size4.addEventListener('click', changeSize4);

// Window.onload:
window.onload = async () => {
   const gData = await gettingData();
   const gKitty = await createKitty(gData);

   createClickImage();
}

module.exports = {
    gettingData,
    createKitty,
    createClickImage,
    clearText,
    changeColorPink,
    changeColorPurple,
    changeColorGreen,
    changeColorRed,
    changeColorYellow,
    changeColorWhite,
    changeFont,
    changeFont2,
    changeFont1,
    changeFont3,
    changeSize1,
    changeSize2,
    changeSize3,
    changeSize4,
  };