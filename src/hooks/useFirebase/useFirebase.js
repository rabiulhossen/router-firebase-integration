import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";
import { useEffect } from "react";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const signInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const signOutHandle = () => {
    signOut(auth).then(() => {});
  };
  return { user, signInGoogle, signOutHandle };
};

export default useFirebase;
