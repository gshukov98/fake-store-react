function ProductListItem({ product }) {

    return (
        <>
            <div className="d-flex py-1">
                <img className="product-image" src={product.image} alt={product.title} />
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold product-title">{product.title}</div>
                            <div className="product-price">{product.price}</div>
                        </div>
                        <span className="product-rating badge rounded-pill bg-secondary ms-auto">{product.rating.rate}</span>
                    </div>
                    <div className="product-description pt-3">{product.description}</div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}

export default ProductListItem;