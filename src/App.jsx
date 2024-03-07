import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/detail/:id", element: <DetailPage /> },
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
