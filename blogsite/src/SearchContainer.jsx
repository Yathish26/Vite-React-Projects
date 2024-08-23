import styles from './Home.module.css'

export function Search() {
    return (
        <>
            <div className={styles.searchcontainer}>

                <input className={styles.input} type="text" />
                <button className={styles.button}><img src="/icons/search.svg" alt="" /></button>

            </div>

        </>
    )
}
