import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Letters.module.scss'
import clsx from 'clsx'

interface ILetters {
  letters: string[]
  setLetters: Dispatch<SetStateAction<string[]>>
}

const Letters: FC<ILetters> = ({letters, setLetters}) => {
  const allLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']

  const clickLetter = (letter: string) => {
    console.log(letter);
    
    setLetters([...letters, letter])
  }

  return (
    <div className={styles.letters}>
      {allLetters.map((letter) => {
        return (<button className={clsx( styles.letter, letters.includes(letter) && styles.disable_letter)} onClick={(() => clickLetter(letter))} disabled={letters.includes(letter) && true} key={letter}>{letter}</button>)
      })}
      
    </div>
  )
}

export { Letters }
