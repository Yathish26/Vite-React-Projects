import styles from './Home.module.css'
import { TypingEffect } from './TypingEffect'
import { Search } from './SearchContainer'


export default function Home() {
    
    return (
        <>
        <div className={styles.head}>Search for <TypingEffect/></div>
        
        <Search/>
        </>
    )
}


