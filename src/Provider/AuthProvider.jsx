/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvaider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const crateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    // login 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     


   

    // goole login 
    const googleLoginUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    //  github login 
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvaider);
    };
    // update profile 

    //  update user profile

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth sata ', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscirbe();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const authInfo = {
        user,
        loading,
        crateUser,
        signIn,
        googleLoginUser,
        githubLogin,
        logOut,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;