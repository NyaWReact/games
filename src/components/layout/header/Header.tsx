
import styles from './Header.module.scss'
import { Dispatch, FC, SetStateAction } from 'react'

interface IHeader {
  setIsShowMenu: Dispatch<SetStateAction<boolean>>
}

const Header: FC<IHeader> = ({setIsShowMenu}) => {

  const openMenu = () => {
    setIsShowMenu(true)
  }

  return (
    <header className={styles.header}>
      <p onClick={() => openMenu() } className={styles.menu}>Menu</p>
    </header>
  )
}

export {Header}
