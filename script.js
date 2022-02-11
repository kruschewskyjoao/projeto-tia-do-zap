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
            
            div.innerHTML = '';
            div.appendChild(newCat);
        })
    });
}


const randomCats = async () => {
    const ol = document.querySelector('#galeria');
    const botao = document.querySelector('.new-cats');
    const func = await gettingData();
    const img = document.querySelectorAll('.cats-image');

    botao.addEventListener('click', () => {

        ol.innerHTML = '';
    
        createKitty(func);  
    });
}

// console.log(gettingCat());
// console.log(gettingCat())
/* function fetchPics() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) =>{
        console.log(data)
    })
} */

/* const createElements = () => {
    const ol = document.getElementById('galeria'); */

    randomCats();

window.onload = async () => {
   const gData = await gettingData();
   const gKitty = await createKitty(gData);

   createClickImage();
}
 
  // --header 'x-api-key: DEMO-API-KEY'