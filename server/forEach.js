const products = [
    { title: 'burger', price: 20},
    { title: 'pizza', price: 25},
    
];
const app = document.querySelector('.app');
products.forEach(product => {
    app.innerHTML += `<li>${product.title} - ${product.price}</li>`
})