import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./layout/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
