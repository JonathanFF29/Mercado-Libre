  
import { combineReducers } from 'redux';
import products from '../reducer/product-reducer';

export enum EReduxActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCT = 'GET_PRODUCT',
  SET_ID = 'SET_ID'
}


export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

const rootReducer = combineReducers({
  products
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
