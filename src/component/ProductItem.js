function ProductItem(props){
    return(
        <div className="product">
            <img src={props.imageUrl} alt="logo"/>
            <p className="center">{props.amount} Rs Only</p>
            <div className="buttonWrapper">
                <button className="btn buyNow">Buy Now</button>
                <button className="btn addCart">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;