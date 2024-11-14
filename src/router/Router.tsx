import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Projects from "../components/pages/Projects";
import About from "../components/pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> }
    ]
  }
]);

export default router;
