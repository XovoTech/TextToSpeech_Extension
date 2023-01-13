import { Button } from 'forging-react';
import React from 'react';
import styles from '../styles/profile.module.css';

const Profile = () => {

    const onLogout = () => {
        chrome.storage.sync.remove(["user"]).then((v) => console.log(v)).catch((err) => console.error(err));
    }

    return (
        <div className={styles.main_container}>
            <Button onClick={onLogout}>Logout</Button>
        </div>
    );
}

export default Profile;
