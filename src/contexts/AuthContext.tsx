import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone?: string;
  createdAt: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, name: string, phone?: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = "ridehub_users";
const CURRENT_USER_KEY = "ridehub_current_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const getUsers = (): Record<string, { profile: UserProfile; password: string }> => {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : {};
  };

  const saveUsers = (users: Record<string, { profile: UserProfile; password: string }>) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const signIn = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const users = getUsers();
    const userRecord = users[email.toLowerCase()];

    if (!userRecord) {
      return { success: false, error: "No account found with this email" };
    }

    if (userRecord.password !== password) {
      return { success: false, error: "Incorrect password" };
    }

    setUser(userRecord.profile);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userRecord.profile));
    return { success: true };
  };

  const signUp = async (
    email: string,
    password: string,
    name: string,
    phone?: string
  ): Promise<{ success: boolean; error?: string }> => {
    const users = getUsers();

    if (users[email.toLowerCase()]) {
      return { success: false, error: "An account with this email already exists" };
    }

    const newProfile: UserProfile = {
      id: crypto.randomUUID(),
      email: email.toLowerCase(),
      name,
      phone,
      createdAt: new Date().toISOString(),
    };

    users[email.toLowerCase()] = { profile: newProfile, password };
    saveUsers(users);

    setUser(newProfile);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newProfile));
    return { success: true };
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
