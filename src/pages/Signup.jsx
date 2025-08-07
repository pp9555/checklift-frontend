import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <SignUp signInUrl="/sign-in" forceRedirectUrl="/dashboard" />
      </div>
    </div>
  );
};

export default Signup;
