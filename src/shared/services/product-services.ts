 class ProductService {
  
  getProducts(query: string) {
    return fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=%20:${query}`
    );
   } 

  getProductById(id: string){
    return fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
  }

}

export default new ProductService();