import React from 'react';
import { Button } from 'forging-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import styles from './header.module.css';
import router from '../../router/routes';

const headingRoutes = [
    {
        title: "Home",
        route: "/",
    },
    {
        title: "Login",
        route: "/login",
    }
]

const Header = React.memo(() => {
    const user = useSelector((store: RootState) => store.auth.user);

    return (
        <div className={`d-flex flex-row justify-content-between ${styles.main_container}`}>
            {
                user ? (
                    <div className='d-flex flex-row'>
                        {
                            headingRoutes.map(route => {
                                const onClick = () => router.navigate(route.route)

                                return (
                                    <Button className='px-3' outline type='link' key={route.route} onClick={onClick}>{route.title}</Button>
                                )
                            })
                        }
                    </div>
                ) : (
                    <Button iconName='people' onClick={() => router.navigate('/profile')} />
                )
            }
        </div>
    )
})

export default Header;
