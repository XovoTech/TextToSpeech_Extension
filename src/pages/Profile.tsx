import React from 'react';
import { Avatar, Button } from 'forging-react';
import styles from '../styles/profile.module.css';

const Profile = () => {

    const onLogout = () => {
        chrome.storage.sync.remove(["user"]).then((v) => console.log(v)).catch((err) => console.error(err));
    }

    return (
        <div className={styles.main_container}>
            <Avatar size="10rem" iconName='person-circle' />
            <div className={styles.profileDetailWrapper}>
                <p>Ahsan Ahmed</p>
            </div>
            <Button onClick={onLogout}>Logout</Button>
        </div>
    );
}

export default Profile;
