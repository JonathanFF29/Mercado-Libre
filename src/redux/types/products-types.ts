export interface IProduct {
    id: string;
    title: string;
    price: number;
    available_quantity: number;
    condition: string;
    permalink: string;
    thumbnail: string;
    address: IAddress;
    pictures: [IPicture];
    sold_quantity: number;
    shipping: IShipping;
    categories: ICategoryDetail;
  }
  
 interface IAddress {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
 }

 interface IPicture {
   id: string;
   url: string;
   secure_url: string;
   size: string;
   max_size: string;
   quality: string
}

interface IShipping {
   free_shipping: boolean;
   mode: string;
}

export interface ICategoryDetail {
   id: string;
   name: string;
   results:string;
}


 
 
  
 export interface IReduxProductState {
    products: IProduct[];
    productsLoaded: boolean;
    productsLoadedAt?: number;
    product?: IProduct;
    productLoaded: boolean;
    productiD: string;
    filterCategory: ICategoryDetail[];
  }
