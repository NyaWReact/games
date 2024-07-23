import React, { FC } from 'react'
import styles from './Lvl.module.scss'
import clsx from 'clsx'

interface LvlProps {
  setLvl: React.Dispatch<React.SetStateAction<string | undefined>>
  lvl: string | undefined
}

const Lvl:FC<LvlProps> = ({setLvl, lvl}) => {
  
  const changeLvl = (lvl: string) => {
    setLvl(lvl)
  }

  return (
    <div className={styles.lvl}>
      <button className={clsx(styles.button, lvl === 'easy' && styles.active_btn)} onClick={() => changeLvl('easy')}>Easy</button>
      <button className={clsx(styles.button, lvl === 'medium' && styles.active_btn)} onClick={() => changeLvl('medium')}>Medium</button>
      <button className={clsx(styles.button, lvl === 'hard' && styles.active_btn)} onClick={() => changeLvl('hard')}>Hard</button>
    </div>
  )
}

export {Lvl}
