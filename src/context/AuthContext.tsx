'use client'
import { createContext, SetStateAction, useContext } from "react";

interface CreateContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<CreateContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};