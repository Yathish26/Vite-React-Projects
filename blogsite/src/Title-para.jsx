import React from 'react'
import styles from './Title-para.module.css'

export default function Titlepara(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>{props.title}</div>
                <p className={styles.para}>{props.paragraph}</p>
                <p className={styles.para}>{props.paragraph2}</p>
            </div>
        </>
    )
}
