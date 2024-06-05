import React from "react";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      setTimeout(() => {
          window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Error" + err.message);
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
