import { Card, Form, Button } from "react-bootstrap";
import SortBy from "./SortBy";
import Category from "./Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import { useProduct } from "../products/ProductContext";

function Filters(props) {

    const dispatch = useDispatch();

    const {
        selectedSortBy,
        selectedCategory,
    } = useProduct();

    useEffect(() => {
        fetchProducts();
    });

    function filtersOnSubmit(e) {
        e.preventDefault();
        fetchProducts();
    }

    function fetchProducts() {
        var path = 'products/category/' + selectedCategory;
        dispatch(getProducts(path, {
            "sort": selectedSortBy,
        }))
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <SortBy />
                    <Category />
                    <Button
                        variant="primary"
                        type="submit">
                        Намери
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Filters;