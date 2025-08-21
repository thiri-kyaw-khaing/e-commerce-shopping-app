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
    ],
  },
  {
    path: "/login",
    Component: SignInPage,
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
