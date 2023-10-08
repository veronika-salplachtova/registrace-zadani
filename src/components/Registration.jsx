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
                onChange={(event) => setUser({...user, email: event.target.value})}
                onBlur={() => setUser({...user, username: getUserName()})}
                placeholder="Email Address"
            />
            <input
                type='text'
                value={user.username}
                onChange={(event) => setUser({ ...user, username: event.target.value })}
                placeholder="User Name"
            />
            <input
                type = "password"
                value = {user.password}
                onChange = {(event) => setUser({...user, password:event.target.value })} 
                placeholder = "Password"           
            />
            <input
                type = "password"
                value = {user.passwordConfirm}
                onChange = {(event) => setUser({...user, passwordConfirm: event.target.value})}
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
