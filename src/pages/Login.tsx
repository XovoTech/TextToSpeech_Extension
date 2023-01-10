import React from 'react';
import { useCallback, useRef } from "react";
import styles from '../styles/login.module.css';
import { Button, Input, RandomImage, IButtonRef, unmarshalFormData } from 'forging-react'
import { useAuthAPI } from '../api/auth';
import { LoginBody } from '../dto/auth';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const loginBtn = useRef<IButtonRef & HTMLButtonElement>(null);
    const { login } = useAuthAPI();

    const onLogin: React.FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
        loginBtn.current?.setLoader(true)
        e.preventDefault();
        try {
            if (formRef.current) {
                const data: LoginBody = unmarshalFormData(new FormData(formRef.current));

                axios.post('https://sonia.app/wp-json/jwt-auth/v1/token', data)
                    .then((res) => {
                        console.log(res.data);
                        chrome.storage.sync.set({ 'token': res.data.token });
                        chrome.storage.sync.set({ 'user_nicename': res.data.user_nicename });
                        chrome.storage.sync.set({ 'user_email': res.data.user_email });
                        chrome.storage.sync.set({ 'user_display_name': res.data.user_display_name });
                        console.log(chrome.storage.sync.get(['user_email']))
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                await login(data);
            }
        } catch (e) {
            console.log(e);
        }
        loginBtn.current?.setLoader(false)
    }, [login]);



    return (
        <div className={styles.login__container}>
            <RandomImage className={styles.userDetail__cover} />
            <div className={styles.login__innerContainer}>
                <form ref={formRef} onSubmit={onLogin}>
                    <Input name="username" defaultValue="" type="floating" label="Email Address" />
                    <Input name="password" defaultValue="" type="floating" label="Password" htmlType="password" />
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