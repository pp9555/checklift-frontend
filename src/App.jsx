import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StatusPage from "./pages/StatusPage";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUp,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";


import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import ProductPage from "./pages/ProductPage";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pricing"
          element={
            // <ProtectedRoute>
              <Pricing />
            /* </ProtectedRoute> */
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/status/:siteId" element={<StatusPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/products" element={<ProductPage/>} />
      </Routes>
    </>
  );
}
