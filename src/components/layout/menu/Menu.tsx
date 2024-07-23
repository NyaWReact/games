import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import { Dispatch, FC, SetStateAction } from 'react'

interface IMenu {
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
}

const Menu: FC<IMenu> = ({setIsShowMenu}) => {
  const menu = () => {
    setIsShowMenu(false)
  }

  return (
    <div className={styles.menu}>
      <Link to={'/findPair'} onClick={() => menu()} className={styles.link}>FindPair</Link>      
    </div>
  )
}

export { Menu }
