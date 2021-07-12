import firebase from "firebase/app";
import "firebase/auth";

import { registerUser } from "@services/user";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj3QlPNylWzKo0_-b3YPgNIRyHABp-U6Y",
    authDomain: "store-f05ad.firebaseapp.com",
    projectId: "store-f05ad",
    storageBucket: "store-f05ad.appspot.com",
    messagingSenderId: "628434065949",
    appId: "1:628434065949:web:5fa3702842a99729c144f4",
    measurementId: "G-JRBYE8N4J3"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (user) => {
    return {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL
    };
};

export const onAuthStateChange = (onChange) => {
    return firebase.auth().onAuthStateChanged((user) => {
        const userNormalice = user ? mapUserFromFirebaseAuth(user) : null
        onChange(userNormalice);
    });
};

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((user) => {
            const data = {
                avatar: user.user.photoURL,
                email: user.user.email,
                name: user.user.displayName
            };
            registerUser(data).then(
                (result) => {
                    console.log("usuario registreado", result);
                },
                (err) => {
                    console.log("ERROR", err);
                }
            );
        });
};

export const logout = () => {
    return firebase.auth().signOut();
};
