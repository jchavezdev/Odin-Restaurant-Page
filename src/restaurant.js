//restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    const image = document.createElement('img');
    //image.src = 'https://media.istockphoto.com/id/474418974/es/vector/vintage-de-arte-y-dise%C3%B1o-de-men%C3%BA-de-restaurante.jpg?s=612x612&w=is&k=20&c=hJ9W5HdM6ds7gvg3GwrsdrDih-lAOE-QcShAG-L7Vyk='
    image.height = '300';
    pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant';
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy  = document.createElement('p');
    copy = textContent = 'We serve the best food in the town';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);

    console.log("createRestaurantHomePage ejecutado"); 
}

export default createRestaurantHomePage;