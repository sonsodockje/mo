import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {},
]);

function App() {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
