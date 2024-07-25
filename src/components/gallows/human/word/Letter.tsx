import { FC } from 'react'
import styles from './Word.module.scss'
import { useGallowsContext } from '../../GallowsContext'

interface ILetter {

  letter: string
}

const Letter: FC<ILetter> = ({letter}) => {

  const {letters} = useGallowsContext()

  return (
    <div className={styles.letter}>
      {letters.includes(letter) ? letter : '_'}
    </div>
  )
}

export {Letter}
