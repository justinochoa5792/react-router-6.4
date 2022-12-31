import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Data from "./pages/Data";
import Home from "./pages/Home";
import { dataLoader } from "./pages/Data";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data" element={<Data />} loader={dataLoader} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
