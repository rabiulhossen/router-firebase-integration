import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const useFirebase =()=>{
    const [user,setUser] =useState({});


    const signInGoogle =()=>{
signInWithPopup(auth,provider)
.then((result)=>{
    const user=result.user;
    console.log(user)
})
    }
return{user,signInGoogle}
}

export default useFirebase;