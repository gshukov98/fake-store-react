import { Card, Form, Button } from "react-bootstrap";
import SortBy from "./SortBy";
import Genres from "./Genres";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import { useProduct } from "../products/ProductContext";

const checkboxes = [
    {
        value: 28,
        label: "Екшън",
        id: "action",
    },
    {
        value: 35,
        label: "Комедия",
        id: "comedy",
    },
    {
        value: 12,
        label: "Приключенски",
        id: "adventure",
    },
    {
        value: 80,
        label: "Криминален",
        id: "criminal",
    },
]


function Filters(props) {
    
    const dispatch = useDispatch();

    const {
        selectedSortBy,
        checkedState,
    } = useProduct();

    useEffect(() => {
        fetchProducts();
    },);

    function filtersOnSubmit(e) {
        e.preventDefault();
        fetchProducts();
    }

    function fetchProducts() {
        dispatch(getProducts('products/category/jewelery', {
            //"with_genres": getCheckedOptions(),
            //"sort_by": selectedSortBy,
        }))
    }

    function getCheckedOptions() {
        const checkedOptions = checkedState.reduce((acc, curr, index) => {
            if(curr){
                return [...acc, checkboxes[index].value]
            }
            return acc
        },[])
        return checkedOptions.toString();
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <SortBy/>
                    <Genres checkboxes={checkboxes}/>
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