import reducer from './product-reducer';
import * as actionTypes from '../reducer/root-reducer';
import IReduxProductState from './product-reducer';
import {ProductMock} from '../../shared/setup/productMock';

describe('product reducer', () =>{
    /*it('shoud return the initial state', () =>{
        expect(reducer(undefined, "")).toEqual({
            products: [],
            productsLoaded: false,
            productsLoadedAt: undefined,
            product: undefined,
            productLoaded: false,
            productiD: "",
            filterCategory: [] 

        })
    })*/

  /* it('shoud store product after endpoint called', () =>{
        expect(reducer({
            products: [],
            productsLoaded: false,
            productsLoadedAt: undefined,
            product: undefined,
            productLoaded: false,
            productiD: "",
            filterCategory: [] 
        }, {type: actionTypes.EReduxActionTypes.GET_PRODUCTS, data: ProductMock})).toEqual({
            products: [ProductMock],
            productsLoaded: false,
            productsLoadedAt: undefined,
            product: undefined,
            productLoaded: false,
            productiD: "",
            filterCategory: [] 
        })
    })*/
})