import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // Store registered users

  const signup = (name, email, password, navigate) => {
    // Check if the email is already registered
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      alert("Email is already taken!");
      return;
    }
    // Add new user to the list
    const newUser = { name, email, password };
    setUsers((prev) => [...prev, newUser]);

    // Automatically log in the user
    setUser(newUser);
    setIsAuthenticated(true);
    navigate("/"); // Redirect to Shop
  };

  const login = (email, password, navigate) => {
    // Check if the email and password match any user
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      setIsAuthenticated(true);
      navigate("/"); // Redirect to Shop
    } else {
      alert("Invalid email or password!");
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
