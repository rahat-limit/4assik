var products = document.querySelectorAll('.product');
var productForm = document.querySelector('.product_form');
var cover = document.querySelector('.conttainerd');
products.forEach((item) => {

    item.addEventListener('click', () => {
        var path = item.querySelector('img')['src'];
        productForm.querySelector('img')['src'] = path;
        productForm.classList.add('show');
    });
});

cover.addEventListener('click', () => {
    productForm.classList.remove('show');
});