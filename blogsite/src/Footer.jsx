import React from 'react'
import styles from './Footer.module.css'
import {useLocation} from 'react-router-dom'

export default function Footer(props) {

    const location = useLocation();
    const isLocation = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    return (
        <>
            <div className={`${styles.footer} ${isLocation || isRegisterPage ? styles.footercenter : ''}`}>
                <p>
                    {props.footertitle}
                    {!isLocation && !isRegisterPage &&
                    <span style={{ color: 'grey'}}> -Until Now</span>
                    }
                    
                </p>

                <div className={styles.copyright} style={{fontFamily:'monospace'}}>
                    This Project was Started on 20-08-2024
                </div>
            </div>
        </>
    )
}
