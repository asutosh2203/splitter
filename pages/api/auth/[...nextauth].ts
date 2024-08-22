import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX571DUxiFYWIJwWtiF_xcHkM5v5F2bKM",
  authDomain: "splitter-b8bf5.firebaseapp.com",
  projectId: "splitter-b8bf5",
  storageBucket: "splitter-b8bf5.appspot.com",
  messagingSenderId: "228111919931",
  appId: "1:228111919931:web:1b40bdf64140a72759e51e",
  measurementId: "G-3RFERYVCFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/