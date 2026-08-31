import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./layout/Layout"

const Home = lazy(() => import("./pages/Home"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
