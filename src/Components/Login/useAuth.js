import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.confic';
import { useState } from 'react';


firebase.initializeApp(firebaseConfig)


const Auth = () => {
    const [user,setUser] = useState(null);

    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then( res =>{
            const { displayName,email,photoURL } = res.user;
            const singedInuser = { name:displayName,email,photo:photoURL};
                setUser(singedInuser);
            return res.user;
        }).catch( err=>{
            setUser(null);
            return err.mesage;
        })
    }

    const signOut = () => {
        firebase.auth.signOut().then(function(){
            setUser(null);
        }).catch(function(error){
            console.log(error)
        })
    }

    return {
        user,
        signInWithGoogle,
        signOut
    }
   
     
}

export default Auth;
