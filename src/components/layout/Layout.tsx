
import { Header } from './header/Header'
import styles from './Layout.module.scss'

import { Outlet, useLocation } from "react-router-dom"



const Layout = () => {
const location = useLocation()  

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
      {location.pathname !== '/' && <Header/>}
      
      <Outlet/>

      </div>
    </div>
  )
}

export {Layout}
