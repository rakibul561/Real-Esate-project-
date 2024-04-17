import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

    const crateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password)=>{
        setLoading(true);
        signInWithEmailAndPassword(auth,password ,email)
    };
      
    const googleLogin = () =>{
    return  signInWithPopup(auth, googleProvider)
    }




    const updateUserProfile = (name,image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }




    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth sata ', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return() =>{
            unSubscirbe();
        }
    }, [])



    const authInfo = {
        user,
        crateUser,
        signIn,
        googleLogin,
        loading,
        logOut,
        updateUserProfile,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;