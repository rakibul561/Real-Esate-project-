import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null);

    const crateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth,password ,email)
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth sata ', currentUser);
            setUser(currentUser)
        });
        return() =>{
            unSubscirbe();
        }
    }, [])



    const authInfo = {
        user,
        crateUser,
        signIn,
        logOut
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;