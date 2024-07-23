import { Header } from './header/Header'
import styles from './Layout.module.scss'

import { Outlet } from "react-router-dom"
import { Menu } from './menu/Menu'
import { useState } from 'react'


const Layout = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <div className={styles.layout}>

      <Header setIsShowMenu={setIsShowMenu}/>
      <Outlet/>
      {isShowMenu &&<Menu setIsShowMenu={setIsShowMenu}/>}
    </div>
  )
}

export {Layout}
