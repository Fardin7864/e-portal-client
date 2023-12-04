import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../../firebase/Firebase";
import useAxios from "../../hooks/useAxios/useAxios";


export const AuthContext = createContext();

const AuthanticationProvider = ({children}) => {
    
    // states
    const [user, setUser] = useState(null);
    const [render, setrender] =useState(0)
    const [isLoading, setLoading] = useState(true);
    const [darkThem, setDarkThem] = useState(false)
    const [dark, setDark] = useState(false)
    const axios = useAxios();

    // auth provider
    const google = new GoogleAuthProvider();

    // create user with email
    const creatUres =(emial, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, emial, password)
     }

    // Login with email and pass
    const login = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Social login
    const socilaLogin = (provider) => { 
        setLoading(true)
        return signInWithPopup(auth, provider)
     }

    // toasts
    const successToast = () => { 
        toast('Successfully Loged In!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }

    const success=(message) => { 
        toast(` ${message}!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }

    const faildToast =() => { 
        toast('Log In faild!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }
    const signOutToast =() => { 
        toast('Sign Out successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }
    const networkFaildToast =() => { 
        toast('please check your Network!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }
      //  sign out
    const logOut = () => { 
        setLoading(true)
        signOut(auth)
        signOutToast()
     }

    
    useEffect(() => { 
        const unsebscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true)
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsebscribe();
        }
     },[])


     const hadnleToggle=() => { 
       setDarkThem(!darkThem);
       setDark(!dark);
      }

      const them = darkThem ? "bg-gray-600 " : "bg-[#f8f8f8]"

    const hadleWish = (blog) => { 
        axios.post('/wishlist', blog)
        .then(res => {
            if (res.data.acknowledged) {
                success("Added to Wishlist!");
            }
        })
     }
    
    const handleDeleteWishlist = (id) => { 
        axios.delete(`/wishlist/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                success("Successfully Deleted!")
            }
        })
     }

    //  context info
     const authInfo = {
        user,
        signOut,
        signOutToast,
        google,
        creatUres,
        login,
        socilaLogin,
        logOut,
        isLoading,
        successToast,
        faildToast,
        networkFaildToast,
        success,
        hadnleToggle,
        them,
        dark,
        hadleWish,
        handleDeleteWishlist,
        render,
     }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthanticationProvider;