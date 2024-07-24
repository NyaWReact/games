import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import { FC,} from 'react'

interface IMenu {
  
}

const Menu: FC<IMenu> = () => {


  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>Nya_Menu</h1>
      <nav className={styles.navigate}> 
        <Link to={'/findPair'} className={styles.link}>Find_Pair</Link>      
        <Link to={'/gallows'} className={styles.link}>Gallows</Link>      
      </nav>
    </div>
  )
}

export { Menu }
