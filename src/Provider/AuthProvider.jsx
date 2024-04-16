import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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