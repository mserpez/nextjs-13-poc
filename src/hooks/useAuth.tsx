import { useContext } from "react";
import { AuthContext } from "../providers/auth";

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth context must be use inside AuthProvider");

  return context;
}
