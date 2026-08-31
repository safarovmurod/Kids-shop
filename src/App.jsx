import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Careers from "./pages/Careers"
import About from "./pages/About"
import Security from "./pages/Security"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "careers", element: <Careers /> },
      { path: "about", element: <About /> },
      { path: "security", element: <Security /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}