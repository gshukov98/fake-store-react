import ProductList from "../components/products/ProductList";
import Filters from "../components/filters/Filters";
import {Col} from "react-bootstrap";
import {ProductProvider} from "../components/products/ProductContext"


function Products(props) {
    return (
        <ProductProvider>
            <Col>
                <ProductList/>
            </Col>
            <Col  md={3}>
                <Filters/>
            </Col>
        </ProductProvider>
    );
}

export default Products;
