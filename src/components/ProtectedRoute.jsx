// components/ProtectedRoute.jsx
import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>; // or splash screen
  }

  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/dashboard" />; // Redirect to sign-in if not authenticated
  }

  return children;
}
