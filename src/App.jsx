import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Myinfo from "./pages/Myinfo";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/detail/:id", element: <DetailPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/account/:id", element: <Myinfo /> },
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
