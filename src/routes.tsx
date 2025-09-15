import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/Home";
import ContactUsPage from "./Pages/ContactUs";
import SignInPage from "./Pages/auth/SignInPage";
import SignUpPage from "./Pages/auth/SignUpPage";
import AuthRootLayout from "@/components/auth/AuthRootLayout";
import CreateAccPage from "@/Pages/auth/CreateAccPage";
import ProductRootLayout from "./Pages/Products/ProductRootLayout";
import ProductDetailPage from "./Pages/Products/ProductDetail";
import AboutPage from "./Pages/AboutPage";
import FAQPage from "./Pages/FAQPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import CheckOutPage from "./Pages/Products/CheckOutPage";
import ProfileSettingPage from "./components/HeaderComponent/profileSettingPage";
import RootLayoutAdmin from "./Pages/admin/rootlayout";
import AdminDashboardPage from "./Pages/admin/adminDashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "contact", Component: ContactUsPage },
      {
        path: "products",
        Component: ProductRootLayout,
        children: [{ path: ":productId", Component: ProductDetailPage }],
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "faq",
        Component: FAQPage,
      },
      {
        path: "cart",
        Component: ShoppingCartPage,
      },
      {
        path: "/checkout",
        Component: CheckOutPage,
      },
      {
        path: "/profile",
        Component: ProfileSettingPage,
      },
    ],
  },
  {
    path: "/login",
    Component: SignInPage,
  },
  {
    path: "/admin",
    Component: RootLayoutAdmin,
    children: [{ index: true, Component: AdminDashboardPage }],
  },

  {
    path: "/register",
    Component: AuthRootLayout,
    children: [
      { index: true, Component: SignUpPage },
      { path: "create-acc", Component: CreateAccPage },
    ],
  },
]);
