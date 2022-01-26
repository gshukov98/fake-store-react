import ProductList from "../components/products/ProductList";
import Filters from "../components/filters/Filters";
import {Col} from "react-bootstrap";
import {ProductProvider} from "../components/products/ProductContext"


function Products(props) {
    return (
        <ProductProvider>
            <Col  md={3}>
                <Filters/>
            </Col>
            <Col>
                <ProductList/>
            </Col>
        </ProductProvider>
    );
}

export default Products;
