const gettingCat = async () => {
    const url = `https://api.thecatapi.com/v1/images/search`;
    const response = await fetch (url), {
        headers: {
         'x-api-key': 'f69f168c-559c-46ca-9df9-95fbfd3df073',
        }
    }
    const result = await response.json();
    return result;
}

console.log(gettingCat('bengal'));

const createElements = () => {
    const ol = document.getElementById('galeria');
}

window.onload = async () => {
   await gettingCat();
}