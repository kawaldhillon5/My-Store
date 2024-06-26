
export async function getCategories() {
    return await (await fetch('https://fakestoreapi.com/products/categories')).json();            
}

