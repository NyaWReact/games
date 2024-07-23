import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={'/findPair'}>FindPair</Link>
    </header>
  )
}

export {Header}
