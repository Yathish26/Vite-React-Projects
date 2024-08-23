import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './First.module.css';

export default function First() {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);
    };

    return (
        <div className={styles.container}>
            <Link to="/second">
                <span className={`${styles.letter} ${animate ? styles.move : ''}`} onClick={handleClick}>A</span>
            </Link>
        </div>
    );
}
