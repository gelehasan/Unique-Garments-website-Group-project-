import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import {doc, setDoc, getDoc,getDocs, getFirestore} from 'firebase/firestore';

import { collection, writeBatch,query } from 'firebase/firestore'; 
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
    id:user.uid,
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
    return user;
    };

//Retrieves user information  from firebase inside our "user" catagory 
//by passing it a valid userId
export const getUserInformation= async (userId)=>{
        const userDocRef = doc(db, "users", userId);
        const userSnapshot = await getDoc(userDocRef);
        const userData = userSnapshot.data();
         console.log(userData)
         return userData;
         
         }
   


export const AuthchangeListiner = (callback)=> onAuthStateChanged(auth,callback);

export const SignInUser = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
    
  export const addCollectionAndDocumentss =async (itemToAdd)=> {

     const collectioRef =  collection(db,'Catagories');
     
    const batch=  writeBatch(db);
    itemToAdd.forEach((item)=>{
    let docRef= doc(collectioRef,item.itemName.toLowerCase());

      
      batch.set(docRef,item);

     })
     
     
    await batch.commit()
     
     console.log('Done!')
     
     }
 
     export const getCollectionData = async ()=>{
      const collectionRef= collection(db, 'Catagories');
      const queryRequest =  query(collectionRef);
      
      const response = await getDocs(queryRequest);
      const Data = response.docs.map((item)=>{
        
      return item.data()
      
      })
      
  return Data;
      
      }

getCollectionData()