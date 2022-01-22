import { Container, Row } from 'react-bootstrap';
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import {ThemeProvider} from "./ThemeContext";
import Products from "./pages/Products";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
  },
  {
    path: '/products',
    component: <Products/>,
  }
]

function App() {

  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route 
        key={index}
        exact={route.exact}
        path={route.path}
        element={route.component}
        />
    })
  }

  return (
    <ThemeProvider>
      <Router>
        <NavBar/>
        <Container>
          <Row className="mt-5">
            <Routes>
              {getRoutes()}
            </Routes>
          </Row>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
