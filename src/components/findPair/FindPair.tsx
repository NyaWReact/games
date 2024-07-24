import { useState } from 'react'
import styles from './FindPair.module.scss'
import { Lvl } from './lvl/Lvl'
import { Game } from './game/Game'

const FindPair = () => {
  const [lvl, setLvl] = useState<string | undefined>('medium')
  return (
    <div className={styles.find_pair}>
      <div className={styles.wrapper}>
        <Lvl setLvl={setLvl} lvl={lvl}/>
        <Game lvl={lvl}/>
      </div>
    </div>
  )
}

export { FindPair }