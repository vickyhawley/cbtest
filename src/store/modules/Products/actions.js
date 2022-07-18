export default {

async loadProductItems(context){
 const response = await fetch(`https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products`);
 const responseData = await response.json();
 if (!response.ok) {
    // ..
 }
 const productItems = [];

 for (const product in responseData) {
    const productItem = {
    id: responseData[product].id,
    title: responseData[product].product_name,
    image: responseData[product].image,
    price: responseData[product].price,
    stock: responseData[product].stock_count
    };
    productItems.push(productItem);
 }
 context.commit('setProducts', productItems);
}
};