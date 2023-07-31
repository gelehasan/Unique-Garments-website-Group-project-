import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged } from "firebase/auth"
import {doc, setDoc, getDoc, getFirestore} from 'firebase/firestore';
import { useCallback } from 'react';
const firebaseConfig = {
    apiKey: "AIzaSyBJVmYLInO_9JMqKEKIS4lyCXEfSAxl-HU",
    authDomain: "unique-garments.firebaseapp.com",
    projectId: "unique-garments",
    storageBucket: "unique-garments.appspot.com",
    messagingSenderId: "289661086757",
    appId: "1:289661086757:web:27fbf714fc2a6f5d6de3cc"
  };


  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

const db =  getFirestore();


export const signUpAuthentication = async (registrationFields={}) => {

    let {email, password, type}= registrationFields;

    if (!email || !password) return;

    //createUserWithEmailAndPassword is a firebase Authentication library
    //It returns a promise object which contains user
    const {user}= await createUserWithEmailAndPassword(auth, email, password);

    let {displayName}= user;
    //Check if the displayName from the user object is null or undefined
    // If so, assign the displayName from the additional object parameter
    if(displayName == null){
    displayName=registrationFields.username;
    }

    const userDocRef = doc(db, "users", user.uid);
    //getting a snapshot of the user in the databse
    const userSnapshot = await getDoc(userDocRef);
    
    
//If it doesnt exist
if (!userSnapshot.exists()) {
    const createdAt = new Date();
    
    try {
    
    await setDoc(userDocRef, {
    displayName,
    email,
    type,
    createdAt,
    });

    
    } catch (error) {
    console.log("error creating the user", error.message);
    }
    }
    // Return the user object with the updated displayName property
    //if the create user runs successful
    // It returns the user object with updated display property
    //along with other properties like uid, email, etc.
    return {...user, displayName:displayName, type:type};
    };
        

export const AuthchangeListiner = (callback)=> onAuthStateChanged(auth,callback);