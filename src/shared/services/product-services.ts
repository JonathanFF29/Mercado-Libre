import http from "../http-common";

class ProductService {
  getProducDetail(idProduct: any) {
    const headers = {
        'Content-Type': 'application/json'
      }
      return http.get(`/sites/MLA/search?q=${idProduct}`,  {
        headers: headers
      })
   } 

  getProducts(productName: any){
    console.log("product name" + productName);
    const headers = {
      'Content-Type': 'application/json'
    }
    return http.get(`/sites/MLA/search?q=${productName}`,  {
      headers: headers
    })
  }

 



}

export default new ProductService();