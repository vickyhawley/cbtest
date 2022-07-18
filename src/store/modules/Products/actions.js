export default {

    async loadProductItems(context) {
        const response = await fetch(
          `https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products`
        );
        const responseData = await response.json();
        console.log(responseData)
    
        if (!response.ok) {
          // ...
        }
    
        const results = [];
    
        for (const key in responseData) {
            for(const i in key){
          const result = {
            "id": responseData[key][i].id,
            "title": responseData[key][i].product_name,
            "image": responseData[key][i].image,
            "price": responseData[key][i].price,
            "stock": responseData[key][i].stock_count
          };
          results.push(result);
          console.log(results)
    }
    context.commit('setProducts', results);
}
        
      }
    }