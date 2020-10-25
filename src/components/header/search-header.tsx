import React, { FC } from "react";
import { Bar } from "../../assets/styles/components/bar";
import { Image } from '../../assets/styles/components/image';
import { Dispatch } from "redux";
import { AppState } from "../../redux/reducer/root-reducer";
import {getProducts} from '../../redux/actions/action-products'
import { connect, useDispatch } from "react-redux";
import {  useHistory } from "react-router-dom";

const SearchHeader: FC<SearchHeaderProps> = (products, productsLoaded) => {
    let history = useHistory();  
    const dispatch: Dispatch<any> = useDispatch()
    const saveArticle = React.useCallback(
            (query: any) => dispatch(getProducts(query.target.value)),
            [dispatch]
    )
    if(products.productsLoaded){
       history.push('/productList');
       console.log("lista productos", products);
    }
    return (
        <Bar>
            {/*<Image src={mercadoLibreLogo} />*/}
            <input
                placeholder='Nunca dejes de'
                onChange={saveArticle}
            >
            </input>
            {/*<Image src={searchIcon} />*/}
        </Bar>

    )

}

const mapStateToProps = (state: AppState) => ({
    products: state.products.products,
    productsLoaded: state.products.productsLoaded
});

type SearchHeaderProps = ReturnType<typeof mapStateToProps>;

export default connect(
    mapStateToProps
)(SearchHeader);

