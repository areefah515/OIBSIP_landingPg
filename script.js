let currentIndex = 0;

function navigate(direction) {
    const products = document.querySelectorAll('.product-item');
    const totalProducts = products.length;
    const itemsPerPage = 3; 

    products.forEach(product => product.style.display = 'none');

    currentIndex += direction;

    
    if (currentIndex < 0) currentIndex = Math.ceil(totalProducts / itemsPerPage) - 1;
    if (currentIndex >= Math.ceil(totalProducts / itemsPerPage)) currentIndex = 0;

    for (let i = currentIndex * itemsPerPage; i < (currentIndex + 1) * itemsPerPage && i < totalProducts; i++) {
        products[i].style.display = 'block';
    }
}

navigate(0);
