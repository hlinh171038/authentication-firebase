import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import firebase from 'firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export  function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState()
    function signup(email,password) {
         firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) =>{
            console.log(user)
        })
        .catch(err =>{
            console.log("error sign up is:",err.message)
        })
    }

    function login(email,password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user =>{
          console.log(user)
      }).catch(err =>{
          console.log("error is :", err.message)
      });
    }
    function logout(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        console.log(error.message)
      });
    }
    function restPassword(email) {
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Email sent.
      }).catch(function(error) {
        console.log(error.message)

      });
    }
    function updateEmail(email){
      return currentUser.updateEmail(email)
    }
    function updatePassword (password){
      return currentUser.updatePassword (password)
    }
    useEffect(()=>{
       const unsubcriber = firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubcriber
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        restPassword,
        updateEmail,
        updatePassword 
    }

  return (
    <AuthContext.Provider value ={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
