import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase"; // Adjust the path to your firebase config file
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('user_data'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserData(user);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) 
        {
        const { accessToken } = currentUser;
        const user = {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        };
        login(accessToken, user);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      var googleUserData = {name: result.user.displayName, email: result.user.email , password: '123', passwordConfirm: '123'}
      const { accessToken } = result.user;
      const user = {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };

      login(accessToken, user);
      return googleUserData;
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const login = (newToken, newData) => {
    localStorage.setItem('user_data', JSON.stringify({ userToken: newToken, user: newData }));
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
  };

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem('user_data');
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, token, isAuthenticated, login, userData }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
