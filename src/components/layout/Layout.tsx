import { Header } from './header/Header'
import styles from './Layout.module.scss'

import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header/>
      <Outlet/>
    </div>
  )
}

export {Layout}
