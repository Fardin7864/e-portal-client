import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/MainRoute/Route.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthanticationProvider from "./providers/authProvider/AuthanticationProvider.jsx";

// tanstack client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <PhotoProvider
        speed={() => 500}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
    <AuthanticationProvider>
        <SkeletonTheme baseColor="#d1d1d1" highlightColor="#ebebeb">
          <QueryClientProvider client={queryClient}>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <RouterProvider router={Route}></RouterProvider>
          </QueryClientProvider>
        </SkeletonTheme>
    </AuthanticationProvider>
      </PhotoProvider>
  </React.StrictMode>
);
