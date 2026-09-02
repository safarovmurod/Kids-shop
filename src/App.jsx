import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const AkciiPage = lazy(() => import("./pages/AkciiPage"));
const AkciiDetailsPage = lazy(() => import("./pages/AkciiDetailsPage"));
const DetskayaMebelPage = lazy(() => import("./pages/DetskayaMebelPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const MyOrdersPage = lazy(() => import("./pages/MyOrdersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ProfileSettingsPage = lazy(() => import("./pages/ProfileSettingsPage"));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
        path: "blog/:id",
        element: (
          <Suspense fallback={null}>
            <BlogDetailsPage />
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
        path: "akcii/:id",
        element: (
          <Suspense fallback={null}>
            <AkciiDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "detskaya-mebel",
        element: (
          <Suspense fallback={null}>
            <DetskayaMebelPage />
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
      {
        path: "favorites",
        element: (
          <Suspense fallback={null}>
            <FavoritesPage />
          </Suspense>
        ),
      },
      {
        path: "profile-settings",
        element: (
          <Suspense fallback={null}>
            <ProfileSettingsPage />
          </Suspense>
        ),
      },
      {
        path: "contacts",
        element: (
          <Suspense fallback={null}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
