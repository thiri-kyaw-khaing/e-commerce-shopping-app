import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes.tsx";
// import { ThemeProvider } from "@/components/ui/theme-provider";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
    </ThemeProvider> */}
    <RouterProvider router={router} />
  </StrictMode>
);
