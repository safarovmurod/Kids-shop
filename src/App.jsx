import { lazy, Suspense } from "react"
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
        element: (
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
