import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgetPassword = () => {

    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState();
    const [isEmailValid, setIsEmailValid] = useState();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const auth = getAuth();

    const validateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setIsEmailValid(regex.test(email));
    }

    const onForgetPassword = async (e) => {
        e.preventDefault();
        
        setIsEmailValid(regex.test(email));

        if(!isEmailValid) {
            alert("Email is invalid");
            return;
        }

        await sendPasswordResetEmail(auth, email)
        .then(() => {
            setIsEmailSent(true);
            setEmail('');
            setIsEmailValid(false);
            alert("Email Sent!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <>
            <form id="reset-password-form">
                <div>
                    {isEmailSent ? 
                        <p>Email Sent!</p>
                        :
                        <p>Email not sent yet!</p>
                    }
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <input
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => validateEmail(e)}  
                        required                                    
                        placeholder="Email address"                                
                    />
                </div>
                <button
                    type="submit"
                    disabled={!isEmailValid}
                    onClick={onForgetPassword}
                >
                    Reset Password
                </button>
            </form>
        </>
    )

}

export default ForgetPassword