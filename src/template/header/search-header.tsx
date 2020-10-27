import React, { FC } from "react";
import { Bar } from "./component/bar";
import { Image } from './component/image';
import { Dispatch } from "redux";
import { AppState } from "../../redux/reducer/root-reducer";
import { getProducts } from '../../redux/actions/action-products';
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { BarSearch } from "./component/barSearch";

const SearchHeader: FC<SearchHeaderProps> = (products, productsLoaded) => {
    let history = useHistory();
    const dispatch: Dispatch<any> = useDispatch()
    const saveArticle = React.useCallback(
        (query: any) => dispatch(getProducts(query.target.value)),
        [dispatch]
    )
    if (products.productsLoaded) {
        history.push('/productList');
        console.log("lista productos", products);
    }
    return (
        <Bar>
            {<Image src="../../assets/images/Logo_ML.png" />}
            <BarSearch>
                <input
                    placeholder='Nunca dejes de buscar'
                    onChange={saveArticle}
                >
                </input>
                {<Image  src="../../assets/images/ic_Search.png" />}
            </BarSearch>
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

