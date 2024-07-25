import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface IGallowsContext {
  letters: string[]
  setLetters: Dispatch<SetStateAction<string[]>>
  mistakes: number
  setMistakes: Dispatch<SetStateAction<number>>
  word: string[]
  setWord: Dispatch<SetStateAction<string[]>>
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}



export const GallowsContext = createContext<IGallowsContext>({
  letters: [''],
  setLetters: () => {},
  mistakes: 0,
  setMistakes: () => {},
  word: [''],
  setWord: () => {},
  isShow: false,
  setIsShow: () => {}

})

export const useGallowsContext = () => useContext(GallowsContext)