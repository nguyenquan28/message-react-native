import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [errorFb, setError] = useState("")
    return (
        <AuthContext.Provider
            value={{
                user,
                errorFb,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password).then((reponsitory) => {
                            console.log(reponsitory.user.uid);
                            AsyncStorage.setItem('uid', reponsitory.user.uid)
                        })
                    } catch (error) {
                        // console.log(error);
                        setError(error);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (error) {
                        console.log(error);
                    }
                },
                logOut: async () => {
                    try {
                        await auth().signOut()
                    } catch (error) {
                        console.log(error);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}