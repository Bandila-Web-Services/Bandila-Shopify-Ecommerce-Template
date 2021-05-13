import Link from 'next/link';
import styles from './navbar.module.scss'

const Navbar = () => {
    return(
        <div>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/"><a className={styles.text}>Home</a></Link></li>
                <li className={styles.listItem}><Link href="/about"><a className={styles.text}>Second Page</a></Link></li>
            </ul>
        </div>
    );
}

export default Navbar;