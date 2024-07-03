
export async function getCategories() {
    return await (await fetch('https://fakestoreapi.com/products/categories')).json();            
}

export async function getCategoryProducts(url) {
    return await (await fetch(`https://fakestoreapi.com/products/category/${url}`)).json();
}

export async function getProduct(id) {
    return await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();

}

