import {Form} from "react-bootstrap";
import {useProduct} from "../products/ProductContext";

function Category(props) {
    const {selectedCategory, setSelectedCategory} = useProduct();
    const options = [
        {
            value: "electronics",
            title: "Електроника",
        },
        {
            value: "jewelery",
            title: "Бижута",
        },
        {
            value: "men's clothing",
            title: "Мъжко облекло",
        },
        {
            value: "women's clothing",
            title: "Дамско облекло",
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
            <Form.Label>Избери категория:</Form.Label>
            <Form.Select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}>
                {getOptions()}
            </Form.Select>
        </Form.Group>
    )
}
export default Category;