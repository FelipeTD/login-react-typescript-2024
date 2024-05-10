import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null);

    const signin = async () => {

        setUser({
            "id": 1, 
            "name": "fedispato", 
            "email": "fedispato@gmail.com"
        });

        return true;
    }

    const signout = async () => {

    }

    return(
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );

}