import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  // Providers
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    signInWithGoogle,
  };
};

export default useFirebase;
