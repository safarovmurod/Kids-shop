import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import MyOrdersPage from "./pages/MyOrdersPage";

const Home = lazy(() => import("./pages/Home"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const AkciiPage = lazy(() => import("./pages/AkciiPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));

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
      {
        path: "blog",
        element: (
          <Suspense fallback={null}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "akcii",
        element: (
          <Suspense fallback={null}>
            <AkciiPage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={null}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={null}>
            <CheckoutPage />
          </Suspense>
        ),
      },
      {
        path: "payment",
        element: (
          <Suspense fallback={null}>
            <PaymentPage />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={null}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={null}>
            <ForgotPasswordPage />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={null}>
            <MyOrdersPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
