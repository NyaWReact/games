import {useEffect } from 'react'
import styles from './Word.module.scss'
import { Letter } from './Letter'
import { useGallowsContext } from '../../GallowsContext'



const Word= () => {
  
  const {word, letters, setMistakes} = useGallowsContext()

  useEffect(() => { 
    if (letters.length > 0) {
      if (!word.includes(letters[letters.length - 1])) {
        setMistakes((mistake) => mistake + 1)
      }
    } 
    
  }, [word, letters, setMistakes])

  return (
    <div className={styles.word}>
      {word.map((letter) => {
        return (<Letter letter={letter} key={letter}/>)
      })}
    </div>
  )
}

export {Word}
