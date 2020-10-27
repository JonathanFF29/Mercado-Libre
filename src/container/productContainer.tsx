import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchHeader from '../template/header/search-header';
import ProductList from './productList/product-list';
import ProductDetail from './productDetail/product-detail';
import { MainDiv } from './components/mainDiv';
import { BreadCrumb } from './components/breadCrumb';
import { connect } from 'react-redux';
import { AppState } from '../redux/reducer/root-reducer';

export class ProductContainer extends React.Component<ProductContainerProps> {


    render() {
        let maxCategory;
        const { category } = this.props;
        if (category.length !== 0) {
            const listCategory: any = category[0].categories;
            maxCategory = listCategory.reduce((max: any, category: any) => max.results > category.results ? max : category);
            console.log("category", maxCategory);
        }

        return (
            <MainDiv >
                <Route path='/'
                    render={(...props) => (
                        <SearchHeader />
                    )}>
                </Route>                
                <div id="breadcrumb">{maxCategory.name}</div>
                <Switch>
                    <Route path="/productList" component={ProductList} />

                    <Route path="/productDetail" component={ProductDetail} />

                </Switch>
            </MainDiv>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    category: state.products.products
});

type ProductContainerProps = ReturnType<typeof mapStateToProps>;

export default connect(
    mapStateToProps
)(ProductContainer);
