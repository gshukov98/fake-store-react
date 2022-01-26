import { Alert } from "react-bootstrap";

function NoResults({ name }) {
    return (
        <Alert variant="info" className="p-5 text-center">
            {name}
        </Alert>
    )
}

export default NoResults;