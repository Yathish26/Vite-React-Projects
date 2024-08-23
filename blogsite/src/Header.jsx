import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function Header(props) {
    const location = useLocation();
    const menuItems = ['Home', 'Join Us', 'Services', 'Blogs', 'Contact', 'About Us']

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    /*The Active Color while clicking is mentioned as .active in CSS Module*/


    const isHome = location.pathname === '/'
    const isJoinUs = location.pathname === '/joinus'
    const isContactus = location.pathname === '/contact'
    const isServices = location.pathname === '/services' || location.pathname === '/services/register'
    const isBlog = location.pathname === '/blogs'|| location.pathname === '/blogs/create'
    const isAboutus = location.pathname === '/aboutus'



    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const menuCollapse = () => {
        setIsMenuVisible(!isMenuVisible)
    }
    return (
        <>
            <div className={`${styles.header} ${isLoginPage || isRegisterPage ? styles.headercenter : ''}`}>
                <div className={`${styles.icontitle} ${isLoginPage || isRegisterPage ? styles.icontitlecentered : ''}`}>
                    <Link to='/'>
                        <img className={styles.iconlogo} src="/icons/cube.svg" alt="icon" />
                    </Link>
                    <div className={styles.title}>{props.maintitle}</div>
                    {!isLoginPage && !isRegisterPage &&
                        <img onClick={menuCollapse} className={`${styles.arrow} ${isMenuVisible ? styles.arrowrotate : ''} `} src="/icons/arrowdown.svg" alt="" />
                    }
                </div>
                {!isLoginPage && !isRegisterPage && (
                    <Link to='/login'>
                        <img className={styles.iconlogin} src="/icons/login.svg" alt="" />
                    </Link>

                )}
            </div>
            {!isLoginPage && !isRegisterPage &&
                <ul className={`${styles.menus} ${isMenuVisible ? styles.menusVisible : ''}`}>
                    {menuItems.map((menu, index) => (
                        <li key={index}>
                            {menu === 'About Us' ? (<Link to="/aboutus" className={isAboutus ? styles.active : ''}>{menu}</Link>)
                                : menu === 'Home' ? (<Link to={'/'} className={isHome ? styles.active : ''}>{menu}</Link>)
                                    : menu === 'Join Us' ? (<Link to={'/joinus'} className={isJoinUs ? styles.active : ''}>{menu}</Link>)
                                        : menu === 'Services' ? (<Link to={'/services'} className={isServices ? styles.active : ''}>{menu}</Link>)
                                            : menu === 'Blogs' ? (<Link to={'/blogs'} className={isBlog ? styles.active : ''} >{menu}</Link>)
                                                : menu === 'Contact' ? (<Link to={'/contact'} className={isContactus ? styles.active : ''}>{menu}</Link>)
                                                    : (menu)}
                        </li>
                    ))}
                </ul>
            }

        </>
    )
}
