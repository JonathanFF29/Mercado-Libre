import React from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../redux/reducer/root-reducer";
import { getProduct } from '../../redux/actions/action-products';
import {SecondColumn, FirstColumn, MainDiv, ImageProdut} from "./components/index";
import { IProduct } from "../../redux/types/products-types";
import { Button } from "../../assets";

export class ProductDetail extends React.Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>, {productDetail: IProduct}>  {


  componentDidMount() {
    const { getProduct } = this.props;
    getProduct(this.props.productiD);
  }
  render() {
    const { productDetail, productLoaded } = this.props;
    if (!productLoaded) {
      return <h1>Loading...</h1>;
    }
    console.log("product", productDetail);
    return (
      <MainDiv>
        <FirstColumn>
          <ImageProdut  src={productDetail?.pictures[0].url} />
          <p >Descripción del  producto</p>
          <p>{productDetail?.id}</p>
        </FirstColumn>
        <SecondColumn>
          <p>{productDetail?.condition} -  {productDetail?.sold_quantity}</p>
          <p>{productDetail?.title}</p>
          <p>$ {productDetail?.price}</p>
          <Button>Comprar</Button>
        </SecondColumn>
      </MainDiv>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  productDetail: state.products.product,
  productLoaded: state.products.productLoaded,
  productiD: state.products.productiD

});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getProduct
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);