function ProductGridItem({product}){
    return(
        <>
        <div className="col-md-4">
            <div className="img-thumbnail mb-3">
                <div className="d-flex">
                        <img className="product-image img-fluid img-thumbnail" src={product.image} alt={product.title} />
                    <div className="px-2 w">
                        <div className="product-rating badge rounded-pill bg-secondary">{product.rating.rate}</div>
                        <div className="fw-bold product-title py-1">{product.title}</div>
                        <div className="product-price d-flex">{product.price}</div>
                    </div>
                </div>
                <div className="product-description pt-3">{product.description}</div>
            </div>
        </div>
        </>
    )
}

export default ProductGridItem;