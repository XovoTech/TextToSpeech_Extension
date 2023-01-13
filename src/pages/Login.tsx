import React from 'react';
import { useCallback, useRef } from "react";
import styles from '../styles/login.module.css';
import { Button, Input, RandomImage, IButtonRef, unmarshalFormData } from 'forging-react'
import { useAuthAPI } from '../api/auth';
import { LoginBody } from '../dto/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const loginBtn = useRef<IButtonRef & HTMLButtonElement>(null);
    const navigate = useNavigate()
    const { login } = useAuthAPI();

    const onLogin: React.FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
        loginBtn.current?.setLoader(true)
        e.preventDefault();
        try {
            if (formRef.current) {
                const data: LoginBody = unmarshalFormData(new FormData(formRef.current));
                const res = await login(data);
                chrome.storage.sync.set({ 
                    'user': res.data 
                });
                navigate("/")
                
            }
        } catch (e) {
            console.log(e);
        }
        loginBtn.current?.setLoader(false)
    }, [navigate, login]);
    
    return (
        <div className={styles.login__container}>
            <RandomImage className={styles.userDetail__cover} />
            <div className={styles.login__innerContainer}>
                <form ref={formRef} onSubmit={onLogin}>
                    <Input name="username" defaultValue="xovo tech.asfasf" type="floating" label="Email Address" />
                    <Input name="password" defaultValue="Dev@app" type="floating" label="Password" htmlType="password" />
                    <div className={styles.login__alternateActions}>
                        <Link to="/forgot">
                            Forgot Password
                        </Link>
                        <Link to="/signup">
                            Request account
                        </Link>
                    </div>
                    <Button htmlType="submit" ref={loginBtn}>Login</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;