import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { EReduxActionTypes, IReduxBaseAction } from '../reducer/root-reducer';
import { IProduct, IReduxProductState } from '../types/products-types';

export interface IReduxGetProductsAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_PRODUCTS;
  data: IProduct[];
}
export interface IReduxGetProductAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_PRODUCT;
  data: IProduct;
}

export interface IReduxSetProductAction extends IReduxBaseAction {
  type: EReduxActionTypes.SET_ID;
  data: string;
}

export function getProducts(query:string): ThunkAction<
  Promise<IReduxGetProductsAction>,
  IReduxProductState,
  undefined,
  IReduxGetProductsAction
> {
  return async (dispatch: ThunkDispatch<IReduxProductState, undefined, IReduxGetProductsAction>) => {
    const res = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=%20:${query}`
    );
    const products = await res.json();

    return dispatch({
      type: EReduxActionTypes.GET_PRODUCTS,
      data: products.results
    });
  };
}

export function getProduct(
  id: string
): ThunkAction<Promise<IReduxGetProductAction>, IReduxProductState, undefined, IReduxGetProductAction> {
  return async (dispatch: ThunkDispatch<IReduxProductState, undefined, IReduxGetProductAction>) => {
    const res = await fetch(
      `https://api.mercadolibre.com/items/${id}`
    );
    const product = await res.json();
    return dispatch({
      type: EReduxActionTypes.GET_PRODUCT,
      data: product
    });
  };
}

export function SetProductId(
  id: string
): ThunkAction<Promise<IReduxSetProductAction>, IReduxProductState, undefined, IReduxSetProductAction> {
  return async (dispatch: ThunkDispatch<IReduxProductState, undefined, IReduxSetProductAction>) => {
    
    return dispatch({
      type: EReduxActionTypes.SET_ID,
      data: id,
    });
  };
}
