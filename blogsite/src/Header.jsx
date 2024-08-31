import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import DarkModeSwitch from './DarkModeSwitch';

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
    const isBlog = location.pathname === '/blogs' || location.pathname === '/blogs/create'
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
                        <svg className={styles.iconlogo} width="50px" height="50px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 21L10 20M12 21L14 20M12 21V18.5M6 18L4 17V14.5M4 9.5V7M4 7L6 6M4 7L6 8M10 4L12 3L14 4M18 6L20 7M20 7L18 8M20 7V9.5M12 11L10 10M12 11L14 10M12 11V13.5M18 18L20 17V14.5"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                    <div className={styles.title}>{props.maintitle}</div>
                    {!isLoginPage && !isRegisterPage &&
                        <img onClick={menuCollapse} className={`${styles.arrow} ${isMenuVisible ? styles.arrowrotate : ''} `} src="/icons/arrowdown.svg" alt="Toggle Menu" />
                    }
                </div>
                {!isLoginPage && !isRegisterPage && (
                    <>
                        <div className={styles.switchnlogin}>
                            <DarkModeSwitch />
                            <Link to='/login'>
                                <img className={styles.iconlogin} src="/icons/login.svg" alt="" />
                            </Link>
                        </div>
                    </>

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
