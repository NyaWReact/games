import { FC, useEffect, useState } from 'react'
import styles from './Game.module.scss'
import { Card } from './card/Card'

interface IGame {
  lvl: string | undefined
}

const Game: FC<IGame> = ({lvl}) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const [field, setField] = useState<number[][]>([[]])
  const [guessed, setGuessed] = useState<number[]>([])

  const [active, setActive] = useState({number: 0, id: -1, jd: -1})
  const [secondActive, setSecondActive] = useState({number: 0, id: -1, jd: -1})

  const [score, setScore] = useState(0)

  useEffect(()=> {
    setGuessed([])
    setScore(0)
    const fillField = () => {
      let instance
      const array: number[] = []
      if (lvl === 'easy') {
        instance = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0], [0,0,0,0]]
      }
      else if (lvl === 'medium') {
        instance = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
      }
      else if (lvl === 'hard') {
        instance = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],]
      }
      
      const checkRepeat = (numb:number | undefined) => {
        const check = array.filter(x => x === numb).length
        if (check < 2) {
          return true
        } else {
          return false
        }
      }
      const  randomIntFromInterval = (min: number, max: number) =>  {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
  
      const field = instance && instance.map((string) => {
        return string.map((number) => {
          let numb = number
          while (numb === 0) {
            let randomNumber
            if (lvl === 'easy') {
              randomNumber = randomIntFromInterval(1, 10)
            }
            if (lvl === 'medium') {
              randomNumber = randomIntFromInterval(1, 15)
            }
            if (lvl === 'hard') {
              randomNumber = randomIntFromInterval(1, 21)
            }
            const check = checkRepeat(randomNumber)
            randomNumber && array.push(randomNumber)
            if (check && randomNumber) numb = randomNumber 
          } 
  
          return numb
  
        })
      })
      field && setField(field)
    }
    fillField()
    setActive({number: 0, id: -1, jd: -1})
  }, [lvl]) 
  console.log(score);
  
  useEffect(() => {
    if (lvl === 'easy' && guessed.length === 10) {
      setIsCompleted(true)
    } else if (lvl === 'medium' && guessed.length === 15) {
      setIsCompleted(true)
    } else if (guessed.length === 20 ) {
      setIsCompleted(true)
    }
  }, [guessed, lvl])

  const closeCompleted = () => {
    setIsCompleted(false)
    setGuessed([])
    setScore(0)
  }

  return (
    <div className={styles.game}>
      <p>Score: <span>{score}</span></p>
      {field && field.map((string, jd) => {
        return (
          <div key={jd} className={styles.string}>
            {string.map((number, id) => {
              return <Card key={id} number={number} active={active} setActive={setActive} id={id} jd={jd} guessed={guessed} setGuessed={setGuessed} setScore={setScore} secondActive={secondActive} setSecondActive={setSecondActive}/>
            })}
          </div>
        )
      })}
      {isCompleted && <div className={styles.completed}>
        <div className={styles.congratulation}>
          <button className={styles.close_button} onClick={() => closeCompleted()}>X</button>
          <p>You win!</p>
          <p>Your score: <span>{score}</span></p>
        </div>
      </div>}
    </div>
  )
}

export {Game}
