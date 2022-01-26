import {Form} from "react-bootstrap";
import {useProduct} from "../products/ProductContext";

function SortBy(props) {
    const {selectedSortBy, setSelectedSortBy} = useProduct();
    const options = [
        {
            value: "asc",
            title: "Възходящо",
        },
        {
            value: "desc",
            title: "Низходящо",
        }
    ]

    function getOptions() {
        return options.map(option => {
            return <option 
                    key={option.value}
                    value={option.value}>
                {option.title}
            </option>
        })
    }

    return (
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlSelect1">
            <Form.Label>Подреди по</Form.Label>
            <Form.Select
                value={selectedSortBy}
                onChange={e => setSelectedSortBy(e.target.value)}>
                {getOptions()}
            </Form.Select>
        </Form.Group>
    )
}
export default SortBy;