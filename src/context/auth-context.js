import { useQuery } from "react-query";
import * as SecureStore from "expo-secure-store";
import React, { useContext, useState } from "react";
import { getUserData } from "../services/authService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentToken, setCurrentToken] = useState(undefined);

  const { data: token, isLoading } = useQuery(
    ["user-me", token],
    async () => await SecureStore.getItemAsync("token")
  );

  const { isFetched, refetch } = useQuery(
    ["user-me", token],
    () => {
      if (token && token !== null) {
        return getUserData(token);
      }
      return null;
    },
    {
      onSuccess: async (userData) => {
        if (token) {
          setCurrentUser(userData);
          setCurrentToken(token);
          setIsLoaded(false);
        }
        if (userData?.message) {
          setCurrentUser(undefined);
          await SecureStore.deleteItemAsync("token");
          setIsLoaded(false);
        }
        setIsLoaded(false);
      },
      onError: async (err) => {
        await SecureStore.deleteItemAsync("token");
        setCurrentUser(undefined);
        setIsLoaded(false);
      },
    }
  );

  async function changeCurrentUser(token) {
    setIsLoaded(true);
    let result = await getUserData(token);
    setCurrentUser(result);
    setCurrentToken(token);
    setIsLoaded(false);
  }

  async function logoutHandler() {
    setIsLoaded(true);
    await SecureStore.deleteItemAsync("token");
    setCurrentUser(undefined);
    setCurrentToken(undefined);
    setIsLoaded(false);
  }

  const value = {
    isLoaded,
    setIsLoaded,
    changeCurrentUser,
    refetch,
    currentUser,
    setCurrentUser,
    currentToken,
    setCurrentToken,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && isFetched && children}
    </AuthContext.Provider>
  );
}
