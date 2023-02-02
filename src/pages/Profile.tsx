import React, { useEffect, useMemo } from 'react';
import { Avatar, Button } from 'forging-react';
import styles from '../styles/profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch, RootState } from '../redux/types';
import { setAuthUser } from '../redux/actions/auth';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const dispatch = useDispatch<AppThunkDispatch>();
    const navigate = useNavigate();

    const { user, subscription } = useSelector((store: RootState) => {
        return {
            user: store.auth.user,
            subscription: store.auth.subscription,
        }
    });

    const onLogout = () => {
        chrome.storage.sync.remove(["user"])
            .then(() => dispatch(setAuthUser(null)))
            .catch((err) => console.error(err));
    }

    const remainingDays = useMemo(() => {
        if (subscription) {
            return moment(subscription.next_payment_date).diff(moment(), 'days');
        }
        return 0;
    }, [subscription])

    useEffect(() => {
        if (!user?.user_email) {
            navigate('/login');
        }
    }, [user, navigate])

    return (
        <div className={styles.main_container}>
            <Avatar className={styles.avatar} size={"25rem"} iconName='person-circle' />
            <div className={styles.profileDetailWrapper}>
                <p>{user?.user_display_name}</p>
                <p>Your subscription is expiring in {`${remainingDays}`} days</p>
                <a href="https://sonia.app" target="__blank">Visit Website</a>
            </div>
            <Button onClick={onLogout}>Logout</Button>
        </div>
    );
}

export default Profile;
