import {useEffect, useState } from 'react'
import styles from './Gallows.module.scss'
import { Letters } from './letters/Letters'
import { Human } from './human/Human'
import { GallowsContext } from './GallowsContext'


const Gallows = () => {

  const [letters, setLetters] = useState<string[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [word, setWord] = useState<string[]>([])
  const [isShow, setIsShow] = useState(false)
  
  useEffect(() => {
    const allWords = ['fdsf', 'sdfsdsdsdf']
    
    const  randomIntFromInterval = (min:0, max: number) =>  {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const number = randomIntFromInterval(0, allWords.length)
    
    setWord(allWords[number].toUpperCase().split(''))

  },[])
  const value = {letters, word, mistakes, setMistakes, setLetters, isShow, setIsShow, setWord}

  

  return (
    <GallowsContext.Provider value={value}>
      <div className={styles.gallows}>
        <div className={styles.wrapper}>
          <Human/>
          <Letters/>
        </div>
      </div>

    </GallowsContext.Provider>
  )
}

export {Gallows}
