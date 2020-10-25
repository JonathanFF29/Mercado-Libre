import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchHeader from '../components/header/search-header';
import ProductList from './productList/product-list';
import ProductDetail from './productDetail/product-detail';
import { MainDiv } from './components/mainDiv';


export class ProductContainer extends Component {
    state = {  }
  
    render() { 
        
        return ( 
            <MainDiv >
                <Route path='/' 
                  render={(...props) => (
                      <SearchHeader />
                  )}>

                </Route>
                <Switch>
                    <Route  path="/productList">
                        <ProductList />
                    </Route>
                    
                    <Route   path="/productDetail">
                        <ProductDetail />
                    </Route>
                </Switch>
            </MainDiv>
        );
    }
}
 
export default ProductContainer;
