import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import {doc, setDoc, getDoc,getDocs, getFirestore, updateDoc, arrayRemove} from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { collection, writeBatch,query } from 'firebase/firestore'; 
import { sendPasswordResetEmail } from "firebase/auth";


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

//Authentication
export const signUpAuthentication = async (registrationFields={}) => {

    let {email, password}= registrationFields;

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
    shippingAdress:"",
    country:"",
    phone:"",
    fullName:"",
    email,
    type:"",
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

    return userData;
         
}
   




export const SignInUser = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  



 
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: "Password reset has been sent!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


  export const SignOutUser = async ()=> 
  {
    return await signOut(auth)
  }

export const onAuthStateChangedListener = (callback) =>
onAuthStateChanged(auth, callback);



//User account update
export const updateAccount = async (userId, updatedFields) => {
  const {userName, fullName, phone, country, shippingAdress, type} = updatedFields;
      const userDocRef = doc(db, "users", userId);
      try {
        await updateDoc(userDocRef, {
          displayName: userName,
          fullName: fullName,
          phone: phone,
          country:country,
          shippingAdress:shippingAdress,
          type:type


        });
        return true;
      } catch (error) {
        console.log("Error updating username", error);
        return false; 
      }
};
  





//Catagories Data
export const addCategories =async (itemToAdd)=> {
    const collectioRef =  collection(db,'Catagories');
    const batch=  writeBatch(db);
    itemToAdd.forEach((item)=>{
    let docRef= doc(collectioRef,item.itemName.toLowerCase());
      batch.set(docRef,item);

      })
      
      await batch.commit()
      console.log('Done!')
}

export const getCategoriesData = async ()=>{
    const collectionRef= collection(db, 'Catagories');
    const queryRequest =  query(collectionRef);
    const response = await getDocs(queryRequest);
    const Data = response.docs.map((item)=>{
      
    return item.data()
    
    })
    
    return Data;
    
}



//WishList data
export const addToWishList = async (userId, product)=>{
  try {
    const collectionRef= collection(db, "wishList");
    const docRef = doc(collectionRef, userId);
    const docSnapshot = await getDoc(docRef);

    if(docSnapshot.exists()){
      const currentWishList = docSnapshot.data().wishlist || [];
      const productIndex = currentWishList.findIndex((item)=> item.id == product.id);

      if(productIndex  ===-1){
        currentWishList.push(product);
        console.log("item has been added to wishList")
        await updateDoc(docRef, {
          wishlist:currentWishList
        });
      
      }else{
        alert("Item Already exists");
      }
    }else{
      await setDoc(docRef,{
        wishlist: [product],
      })
    }
  } catch (error) {
    console.log(error)
  }
}



export const getWishList= async (userId)=>{
  try {
      const collectionRef= collection(db, "wishList");
      const docRef= doc(collectionRef, userId);
      const docSnapshot= await getDoc(docRef);

      if(docSnapshot.exists()){
        const wishListData = docSnapshot.data();
       console.log(wishListData)

        return wishListData;
      }else{
        console.log("Nothing been added to your wishlist");

        return [];
      }

  } catch (error) {
    console.log(error)
  }

}



export const removeItemFromWIshList= async(userId, item)=> {
  try{
    const docRef = doc(db,"wishList", userId);
    await  updateDoc(docRef, {
      wishlist:arrayRemove(item)
    })
    console.log("removed successfully");
  }catch(error){
    console.log(error)
  }
}




//Articles Data
export const addArticles = async (articlesToAdd) => {
  const collectionRef = collection(db, 'Articles');
  const batch = writeBatch(db);

  articlesToAdd.forEach((article) => {
    const docRef = doc(collectionRef, article.id.toString());
    batch.set(docRef, article);
  });

  await batch.commit();

  console.log('Articles added successfully!');
};


export const getArticleData = async () => {
  const collectionRef = collection(db, 'Articles');
  const queryRequest = query(collectionRef);

  const response = await getDocs(queryRequest);
  const articles = response.docs.map((doc) => {
    return doc.data();
  });

  return articles;
};





