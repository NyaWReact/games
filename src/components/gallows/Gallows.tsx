import { useState } from 'react'
import styles from './Gallows.module.scss'
import { Letters } from './letters/Letters'

const Gallows = () => {
  const [letters, setLetters] = useState<string[]>([])
  
  return (
    <div className={styles.gallows}>
      <Letters letters={letters} setLetters={setLetters}/>
    </div>
  )
}

export {Gallows}
