export async function getProducts() {
    try{
        const res = await fetch('https://localhost:7234/api/Product');
        const products = await res.json();
        return products;
    }catch(error){
        console.error('Error fetching products:', error);
        return [];
    }
}