import ProductListItem from "./ProductListItem";
import NoResults from "./NoResult";
import {Card, ButtonGroup, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import ProductGridItem from "./ProductGridItem";
import { useSelector, useDispatch } from 'react-redux';
import { setListView } from "../../redux/actions";

function ProductList(props) {
    const listView = useSelector((state) => state.listView);
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);

    const renderProducts = () => {
        if(!products.length) {
            return <NoResults title={'Няма намерени резултати'}/>
        }
        return listView ? getProductListItems() : getProductGridItems();
    }

    function getProductListItems() {
        return products.map(product => {
            return <ProductListItem 
                key={product.id}
                product={product}
                >
            </ProductListItem>
        })
    }

    function getProductGridItems() {
        return products.map(product => {
            return <ProductGridItem 
                key={product.id}
                product={product}
                >
            </ProductGridItem>
        })
    }

    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title>Резултат</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'primary': 'outline-primary'}
                            onClick={()=> dispatch(setListView(true))}>
                            <FontAwesomeIcon icon={faThList}/>
                        </Button>
                        <Button variant={listView ? 'outline-primary': 'primary'}
                            onClick={()=> dispatch(setListView(false))}>
                            <FontAwesomeIcon icon={faGripHorizontal}/>
                        </Button>
                    </ButtonGroup>
                </div>
                <hr/>
                <div className="row">
                    {renderProducts()}
                </div>
            </Card.Body>
        </Card>

    )
}
export default ProductList;