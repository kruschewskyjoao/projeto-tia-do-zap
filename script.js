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
        cats.setAttribute('src',element.url)
        ol.appendChild(cats);
    })
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


window.onload = async () => {
   const gData = await gettingData();
   const gKitty = await createKitty(gData);
}
 
  // --header 'x-api-key: DEMO-API-KEY'