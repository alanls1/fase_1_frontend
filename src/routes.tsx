import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Admin from "./pages/admin/Admin";
import { AuthProvider } from "./hook/useAuth";
import Home from "./pages/home/Home";
// Create a client
const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin",
        element: (
          <AuthProvider>
            <Admin />
          </AuthProvider>
        ),
        children: [
          {
            index: true,
            path: "/admin/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
