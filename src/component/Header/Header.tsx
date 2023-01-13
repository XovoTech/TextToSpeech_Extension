import React, { useRef } from 'react';
import { Button } from 'forging-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import styles from './header.module.css';
import router from '../../router/routes';


const Header = React.memo(() => {
    const user = useSelector((store: RootState) => store.auth.user);

    const headingRoutes = useRef([
        {
            title: "Home",
            route: "/",
            show: true,
        },
        {
            title: "Login",
            route: "/login",
            show: true,
            // show: !!user?.user_email
        }
    ]).current

    return (
        <div className={`d-flex flex-row justify-content-between ${styles.main_container}`}>
            {
                <div className='d-flex flex-row'>
                    {
                        headingRoutes.map(route => {
                            const onClick = () => router.navigate(route.route)
                            
                            if(!route.show) return null;

                            return <Button className='px-3' outline type='link' key={route.route} onClick={onClick}>{route.title}</Button>
                        })
                    }
                </div>
            }
            <Button type='link' iconName='people' onClick={() => router.navigate('/profile')} />
        </div>
    )
})

export default Header;
