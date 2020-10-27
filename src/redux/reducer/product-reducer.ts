import { EReduxActionTypes } from './root-reducer';
import { IReduxProductState } from '../types/products-types';
import { IReduxGetProductAction, IReduxGetProductsAction, IReduxSetProductAction } from '../actions/action-products';

export const initialState: IReduxProductState = {
  products: [],
  productsLoaded: false,
  productsLoadedAt: undefined,
  product: undefined,
  productLoaded: false,
  productiD: "",
  filterCategory: [] 
};

 type TProductReducerActions = IReduxGetProductsAction | IReduxGetProductAction | IReduxSetProductAction  ;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state: IReduxProductState = initialState, action: TProductReducerActions) {
  switch (action.type) {
    case EReduxActionTypes.GET_PRODUCTS:
      return { ...state, products: action.data, productsLoaded: true };
    case EReduxActionTypes.GET_PRODUCT:
      return { ...state, product: action.data, productLoaded: true };
    case EReduxActionTypes.SET_ID:
      return { ...state, productiD: action.data};
    default:
      return state;
  }
}