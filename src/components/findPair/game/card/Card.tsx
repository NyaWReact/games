import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import styles from './Card.module.scss'
import clsx from 'clsx'

interface Active {
  number: number
  id: number
  jd: number
}

interface ICard {
  number: number,
  active: Active
  id: number
  jd: number
  guessed: number[]
  secondActive: Active
  setScore: Dispatch<SetStateAction<number>>
  setActive: Dispatch<SetStateAction<Active>>
  setSecondActive: Dispatch<SetStateAction<Active>>
  setGuessed: Dispatch<SetStateAction<number[]>>
}

const Card: FC<ICard> = ({number, active, setActive, id, jd, setGuessed, guessed, setScore, setSecondActive, secondActive}) => {
  
  const [isShow, setIsShow] = useState(false)
  const click = () => {
    if (active.number === number && (active.id !== id || active.jd !== jd) ) {
      if (!guessed.includes(number) && secondActive.number !== active.number) {
        setScore((score: number) => score+1)
      }
      setSecondActive({number: 0, id: -1, jd: -1})
      setActive({number: 0, id: -1, jd: -1})
      setGuessed([...guessed, number])
    }
    else if (active.number === 0) {
      setActive({number, id, jd})
    } else {
      console.log(secondActive);
      
      if (secondActive.number === 0 && (active.id !== id || active.jd !== jd)) {
        setSecondActive({number, id, jd})
        setTimeout(() => {
          if (!guessed.includes(number) && secondActive.number !== active.number) {
            setScore((score: number)=> score+1)
          }
          setSecondActive({number: 0, id: -1, jd: -1})
          setActive({number: 0, id: -1, jd: -1})
        }, 700)
      } 
    }

  }
  useEffect(() => {
    if (guessed.includes(number)) {
      setIsShow(true)
    }
    else if ((active.number === number && active.id === id && active.jd === jd) || (secondActive.number === number && secondActive.id === id && secondActive.jd === jd)) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }, [active, secondActive, id, jd, number, guessed])
  
  return (
    <div className={clsx(styles.card, isShow && styles.show)} onClick={() => click()} >
      <div className={clsx(styles.inner, isShow && styles.inner_show)}>
        <div className={styles.front}>

        </div>
        <div className={styles.back}>
          {number}

        </div>
      </div>
    </div> 
  )
}

export {Card}
