import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  // Providers
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (history) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT");
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // register user
  const registerUser = (email, password, name, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to database
        saveUser(email, name, "POST");
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Save User
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:4000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // User logout
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return {
    user,
    error,
    signInWithGoogle,
    registerUser,
    logOut,
  };
};

export default useFirebase;
