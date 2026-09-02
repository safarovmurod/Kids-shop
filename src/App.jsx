import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const AkciiPage = lazy(() => import("./pages/AkciiPage"));
const AkciiDetailsPage = lazy(() => import("./pages/AkciiDetailsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const DeliveryPage = lazy(() => import("./pages/DeliveryPage"));
const WholesalePage = lazy(() => import("./pages/WholesalePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const MyOrdersPage = lazy(() => import("./pages/MyOrdersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ProfileSettingsPage = lazy(() => import("./pages/ProfileSettingsPage"));
const Contacts = lazy(() => import("./pages/Contacts"));
const InfoPage = lazy(() => import("./pages/InfoPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Ҳар як саҳифа дар Suspense печонида мешавад
function page(Component) {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: page(Home) },
      { path: "catalog/:category", element: page(CatalogPage) },
      { path: "catalog/:category/:subcategory", element: page(CatalogPage) },
      { path: "product/:id", element: page(ProductPage) },
      { path: "blog", element: page(BlogPage) },
      { path: "blog/:id", element: page(BlogDetailsPage) },
      { path: "akcii", element: page(AkciiPage) },
      { path: "akcii/:id", element: page(AkciiDetailsPage) },
      { path: "cart", element: page(CartPage) },
      { path: "checkout", element: page(CheckoutPage) },
      { path: "payment", element: page(PaymentPage) },
      { path: "delivery", element: page(DeliveryPage) },
      { path: "wholesale", element: page(WholesalePage) },
      { path: "register", element: page(RegisterPage) },
      { path: "forgot-password", element: page(ForgotPasswordPage) },
      { path: "orders", element: page(MyOrdersPage) },
      { path: "favorites", element: page(FavoritesPage) },
      { path: "profile-settings", element: page(ProfileSettingsPage) },
      { path: "contacts", element: page(Contacts) },
      { path: "about", element: page(InfoPage) },
      { path: "returns", element: page(InfoPage) },
      { path: "*", element: page(NotFound) },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
