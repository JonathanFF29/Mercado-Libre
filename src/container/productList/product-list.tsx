import React, { FC, useCallback} from "react";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../redux/reducer/root-reducer";
import { connect, useDispatch } from "react-redux";
import {  useHistory } from "react-router-dom";
import { MainDiv, ItemDiv, ImageProduts, CityDiv, DescriptionDiv } from "./components"
import {  SetProductId } from '../../redux/actions/action-products';
import { IProduct } from "../../redux/types/products-types";
import carIcon from '../../assets/images/ic_shipping.png'

const ProductList: FC<ProductProps> = (products, isLoaded) => {
    let history = useHistory();  
    
    const dispatch: Dispatch<any> = useDispatch()
    const selectId = useCallback(
            (query: any) => dispatch(SetProductId(query.target.value)),
            [dispatch]
    )

    function doSomething(query:any) {
        dispatch(SetProductId(query))
        console.log("test", )
        history.push('/productDetail');  
    }

   
    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }
    
    return (
         
        <MainDiv>
                {products.products.map((product: IProduct) => (

                    
                    <ItemDiv onClick={() => doSomething(product.id)}    key={product.id} >
                        <ImageProduts src={product.thumbnail} />
                        <DescriptionDiv >
                            <p>$ {product.price}</p>
                            {product.shipping.free_shipping ? <img src={carIcon}></img> : ''}
                            <p>{product.title}</p>
                        </DescriptionDiv>
                        <CityDiv><p>{product.address.city_name}</p></CityDiv>
                    </ItemDiv>
                ))}
            </MainDiv>
    );

}


const mapStateToProps = (state: AppState) => ({
    products: state.products.products,
    isLoaded: state.products.productsLoaded,
    productsLoadedAt: state.products.productsLoadedAt,
});


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      SetProductId
    },
    dispatch,
  );


type ProductProps = ReturnType<typeof mapStateToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
