import { useEffect, useState } from 'react'
import styles from './Game.module.scss'
import { Card } from './card/Card'

const Game = ({lvl}) => {
  const [field, setField] = useState()
  const [guessed, setGuessed] = useState([])

  const [active, setActive] = useState({number: 0, id: -1, jd: -1})
  const [secondActive, setSecondActive] = useState({number: 0, id: -1, jd: -1})

  const [score, setScore] = useState(0)

  useEffect(()=> {
    setGuessed([])
    setScore(0)
    const fillField = () => {
      let instance
      const array = []
      if (lvl === 'easy') {
        instance = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0], [0,0,0,0]]
      }
      else if (lvl === 'medium') {
        instance = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
      }
      else if (lvl === 'hard') {
        instance = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],]
      }
      
      const checkRepeat = (numb) => {
        const check = array.filter(x => x === numb).length
        if (check < 2) {
          return true
        } else {
          return false
        }
      }
      const  randomIntFromInterval = (min, max) =>  {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
  
      const field = instance.map((string) => {
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
            array.push(randomNumber)
            if (check) numb = randomNumber 
          } 
  
          return numb
  
        })
      })
      setField(field)
    }
    fillField()
    setActive({number: 0, id: -1, jd: -1})
  }, [lvl]) 
  
  return (
    <div className={styles.game}>
      <p>score: {score}</p>
      {field && field.map((string, jd) => {
        return (
          <div key={jd} className={styles.string}>
            {string.map((number, id) => {
              return <Card key={id} number={number} active={active} setActive={setActive} id={id} jd={jd} guessed={guessed} setGuessed={setGuessed} setScore={setScore} score={score} secondActive={secondActive} setSecondActive={setSecondActive}/>
            })}
          </div>
        )
      })}
    </div>
  )
}

export {Game}
