
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { FC } from 'react'

interface IHeader {
  
}

const Header: FC<IHeader> = () => {
  return (
    <header className={styles.header} >
      <Link to={'/'} className={styles.menu}>Menu</Link>
    </header>
  )
}

export {Header}
