import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchHeader from '../template/header/search-header';
import ProductList from './productList/product-list';
import ProductDetail from './productDetail/product-detail';
import { MainDiv } from './components/mainDiv';


export class ProductContainer extends React.Component {
    
  
    render() { 
          
        return ( 
            <MainDiv >
                <Route path='/' 
                  render={(...props) => (
                      <SearchHeader />
                  )}>

                </Route>
                <Switch>
                    <Route  path="/productList" component={ProductList} /> 
                  
                    <Route   path="/productDetail" component={ProductDetail}/>
                  
                </Switch>
            </MainDiv>
        );
    }
}
 
export default ProductContainer;
