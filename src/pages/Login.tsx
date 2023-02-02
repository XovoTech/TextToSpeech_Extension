import React, { useEffect } from 'react';
import { useCallback, useRef } from "react";
import styles from '../styles/login.module.css';
import { Button, Input, IButtonRef, unmarshalFormData } from 'forging-react'
import { useAuthAPI } from '../api/auth';
import { LoginBody } from '../dto/auth';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthUser } from '../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch, RootState } from '../redux/types';

const Login = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const loginBtn = useRef<IButtonRef & HTMLButtonElement>(null);
    const navigate = useNavigate()
    const { login } = useAuthAPI();
    const dispatch = useDispatch<AppThunkDispatch>();
    const user = useSelector((store: RootState) => store.auth.user);

    useEffect(() => {
        if(user?.user_email) {
            navigate('/')
        }
    }, [dispatch, user, navigate]);

    const onLogin: React.FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
        loginBtn.current?.setLoader(true)
        e.preventDefault();
        try {
            if (formRef.current) {
                const data: LoginBody = unmarshalFormData(new FormData(formRef.current));
                const user = await login(data);
                chrome.storage.sync.set({ user });
                dispatch(setAuthUser(user));
                navigate("/");
            }
        } catch (e) {
            console.log(e);
        }
        loginBtn.current?.setLoader(false)
    }, [dispatch, login, navigate]);

    return (
        <div className={styles.login__container}>
            <div className={styles.login__innerContainer}>
                <form ref={formRef} onSubmit={onLogin}>
                    <Input name="username" className='w-100' defaultValue="xovo tech.asfasf" type="floating" label="Email Address" />
                    <Input name="password" className='w-100' defaultValue="Dev@app" type="floating" label="Password" htmlType="password" />
                    <div className={styles.login__alternateActions}>
                        <a target="__blank" href="https://sonia.app">
                            Visit Sonia App
                        </a>
                        {/* <Link to="/forgot">
                            Forgot Password
                        </Link> */}
                        {/* <Link to="/signup">
                            Request account
                        </Link> */}
                    </div>
                    <Button htmlType="submit" ref={loginBtn}>Login</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;