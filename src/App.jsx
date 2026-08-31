import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./layout/Layout"

const Home = lazy(() => import("./pages/Home"))
const BlogPage = lazy(() => import("./pages/BlogPage"))
const AkciiPage = lazy(() => import("./pages/AkciiPage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "akcii",
        element: <AkciiPage />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
