import styles from './Home.module.css'
import { TypingEffect } from './TypingEffect'
import { Search } from './SearchContainer'
import TitleSet from './TitleSet'


export default function Home() {
    TitleSet('Hire Arrive')
    
    return (    
        <>
        <div className={styles.head}>Search for <TypingEffect/></div>
        <Search/>
        </>
    )
}


