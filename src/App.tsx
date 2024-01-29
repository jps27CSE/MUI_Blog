import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import TourPage from "./pages/TourPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <TourPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
