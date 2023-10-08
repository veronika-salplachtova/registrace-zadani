import React, { useState } from 'react';

export const Registration = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',  
    })

    const firstPartFromEmail = () => {
        const indexOfAtSign = user.email.indexOf("@")
        return user.email.substring(0, indexOfAtSign)
    }

    const getUserName = () => {
        const isValidEmail = user.email.includes("@")
        const isEmptyUserName = user.username == ''
        return (isEmptyUserName && isValidEmail) ? firstPartFromEmail() : user.username
    }

    const passwordsMatch = () => {
        return user.password == user.passwordConfirm
    }

    return (
        <div style={{ display: "flex", flexFlow: "column", gap: 10 }}>
            <input
                type='text'
                value = {user.email}
                onChange={(event) => {
                    const input = event.target.value
                    setUser({...user, email: input})
                }}
                onBlur={() => {
                    const validEmail2 = user.email.includes("@")
                    setUser({...user, username: getUserName()})
                }}
                placeholder="Email Address"
            />
            <input
                type='text'
                value={user.username}
                onChange={(event) => {
                    const input = event.target.value;
                    setUser({ ...user, username: input });
                }}
                placeholder="User Name"
            />

            <input
                type = "password"
                value = {user.password}
                onChange = {(event) => {
                    const input = event.target.value
                    setUser({...user, password: input})
                }} 
                placeholder = "Password"           
            />

            <input
                type = "password"
                value = {user.passwordConfirm}
                onChange = {(event) => {
                    const input = event.target.value
                    setUser({...user, passwordConfirm: input})
                }}
                placeholder = "Password confirm"
            />

            {!passwordsMatch() && user.passwordConfirm != '' && <div>Passwords do not match</div>}            
            
            <button 
                onClick={() => passwordsMatch() ? console.log(user) : alert("Passwords do not match")}
            >
                REGISTER
            </button>                
        </div>   
    ) 
}
