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
    const allWords = [
      'автомобиль', 'автобус', 'адрес', 'академия', 'актер', 'альбом', 'ангел', 'анекдот', 'апельсин', 'аптека',
      'арбуз', 'аренда', 'арка', 'армия', 'ассистент', 'астроном', 'атлас', 'аудитория', 'афиша', 'бабушка',
      'баклажан', 'балет', 'банк', 'бассейн', 'башня', 'бегемот', 'беда', 'белка', 'бензин', 'библиотека',
      'билет', 'бинокль', 'биржа', 'бисер', 'битва', 'благодарность', 'блин', 'блокнот', 'блюдо', 'богатство',
      'болезнь', 'болото', 'борода', 'босс', 'ботинок', 'бочка', 'брат', 'бревно', 'бриллиант', 'бритва',
      'броня', 'брусника', 'будильник', 'будка', 'буйвол', 'букет', 'буква', 'бульвар', 'бумага', 'бункер',
      'буря', 'бутылка', 'бухгалтер', 'бык', 'быль', 'бюллетень', 'вагон', 'важность', 'валенок', 'валюта',
      'ванна', 'варенье', 'васильки', 'вата', 'вафля', 'вахта', 'ведро', 'ведьма', 'вежливость', 'везение',
      'век', 'великан', 'веник', 'вентилятор', 'верба', 'веревка', 'верность', 'вертолет', 'весна', 'весы',
      'ветер', 'ветчина', 'вечность', 'вещество', 'вешалка', 'взаимность', 'взгляд', 'взлет', 'взлом', 'взор',
      'взрослый', 'взрыв', 'взятка', 'вибрация', 'видеокамера', 'визит', 'вилка', 'вина', 'вино', 'вираж',
      'вирус', 'виселица', 'витамин', 'витрина', 'вихрь', 'вишня', 'владение', 'влажность', 'влияние', 'влюбленность',
      'вода', 'водитель', 'водоворот', 'водяной', 'военная', 'вожак', 'возвращение', 'воздух', 'возмездие', 'война',
      'волнение', 'волокно', 'волосы', 'воля', 'воробей', 'ворота', 'восторг', 'восход', 'воспоминание', 'восток',
      'восторг', 'восхождение', 'вошь', 'врач', 'вред', 'время', 'вселенная', 'вспышка', 'встреча', 'вулкан',
      'вход', 'выбор', 'выдача', 'выезд', 'выживание', 'вызов', 'выигрыш', 'выключатель', 'выпечка', 'выплата',
      'выпуск', 'выпускник', 'высота', 'выставка', 'выстрел', 'выход', 'вышивка', 'газета', 'галактика', 'галерея',
      'галифе', 'гамбургер', 'гангстер', 'гардероб', 'гармония', 'гвоздь', 'гегемон', 'гейзер', 'гектар', 'гель',
      'гемоглобин', 'генерал', 'гений', 'геном', 'генерация', 'герб', 'герметичность', 'герой', 'гигант', 'гимн',
      'гипноз', 'гитара', 'глава', 'глаз', 'глина', 'глобус', 'глотка', 'глубина', 'глушитель', 'гнев',
      'гнездо', 'гном', 'головоломка', 'голод', 'голос', 'голубь', 'гольф', 'гора', 'горелка', 'горизонт',
      'горилл', 'горка', 'город', 'госпиталь', 'гость', 'град', 'грамматика', 'грамм', 'гранат', 'грань',
      'графика', 'грек', 'гриб', 'гроза', 'груша', 'грызун', 'грязь', 'губа', 'губернатор', 'гуашь',
      'гудок', 'гусь', 'дверь', 'движение', 'двигатель', 'двор', 'дворец', 'девочка', 'дедушка', 'дезинфекция',
      'дезодорант', 'декабрь', 'декларация', 'делегация', 'дело', 'демократия', 'день', 'департамент', 'депутат', 'деревня',
      'дерево', 'деталь', 'детектив', 'детство', 'дефицит', 'деятельность', 'джем', 'джинсы', 'джунгли', 'диагноз',
      'диалог', 'диапазон', 'диван', 'диета', 'дизайн', 'диктант', 'диктофон', 'дилемма', 'динамика', 'динозавр',
      'директор', 'диск', 'дискуссия', 'дисплей', 'дистанция', 'дневник', 'дно', 'дождь', 'доклад', 'доктор',
      'долг', 'долина', 'дом', 'домино', 'донор', 'доска', 'доспехи', 'досье', 'доход', 'дочь',
      'драка', 'древность', 'дрова', 'дружба', 'дуб', 'дуга', 'духи', 'душа', 'дым', 'дыня',
      'дымка', 'дымогар', 'дымок', 'дьявол', 'дядя', 'евро', 'европеец', 'ежедневник', 'ежик', 'ель',
      'емкость', 'епископ', 'епитрахиль', 'ересь', 'ерш', 'есаул', 'жабры', 'жажда', 'жара', 'жареное',
      'жасмин', 'жвачка', 'жгут', 'желание', 'железо', 'жемчуг', 'жена', 'жених', 'жертва', 'жесть',
      'жетон', 'живопись', 'жизнь', 'жилет', 'жираф', 'жокей', 'жук', 'журн', 'журнал', 'забастовка',
      'забота', 'заварка', 'завет', 'завод', 'завтрак', 'задача', 'зажигалка', 'зажим', 'зазор', 'зайка',
      'закат', 'закладка', 'заключение', 'заколка', 'закуска', 'залив', 'замена', 'замок', 'заморозка', 'занавес',
  'занятие', 'запад', 'запас', 'запах', 'записка', 'запись', 'заповедник', 'заправка', 'зарядка', 'заслон',
      'засуха', 'затвор', 'затишье', 'заточка', 'защита', 'заяц', 'звезда', 'зверь', 'звонок', 'звук',
      'зебра', 'зелень', 'земля', 'зеркало', 'зерно', 'зигзаг', 'зима', 'знак', 'знаток', 'значение',
      'золотишко', 'золото', 'зонтик', 'зорька', 'зрение', 'зуб', 'зубы', 'зыбь', 'игла', 'игра',
      'идея', 'идол', 'иждивенец', 'икона', 'икота', 'иллюзия', 'имя', 'инвестор', 'индекс', 'индикатор',
      'индус', 'иней', 'инициатива', 'инструкция', 'инструмент', 'интеллект', 'интерес', 'интервью', 'интернет', 'интуиция',
      'иностранец', 'институт', 'инструктор', 'инфекция', 'инфляция', 'инцидент', 'ионизация', 'ипподром', 'ирис', 'ирония',
      'исключение', 'искусство', 'исповедь', 'испуг', 'исследование', 'истина', 'история', 'источник', 'исход', 'кабачок',
      'кабель', 'кабинет', 'каблук', 'кабмин', 'кавалер', 'кавалерия', 'кабинет', 'кабель', 'кабриолет', 'кадастр',
      'кадет', 'каждое', 'казак', 'казарма', 'казино', 'казнь', 'казус', 'какао', 'кактус', 'калейдоскоп',
      'калитка', 'календарь', 'калина', 'калифорния', 'калории', 'калоши', 'камень', 'камзол', 'камин', 'каморка',
      'камыш', 'канал', 'канат', 'канон', 'канцелярия', 'капелла', 'капкан', 'капля', 'капот', 'капуста',
      'каравай', 'карандаш', 'кардиограмма', 'карета', 'карлик', 'карман', 'карта', 'картина', 'картофель', 'касание',
      'кассета', 'кассир', 'каста', 'каталог', 'катание', 'катапульта', 'катастрофа', 'категория', 'катер', 'каток',
      'катушка', 'кафе', 'качество', 'качеля', 'каюта', 'квартира', 'кварц', 'квас', 'квинтэссенция', 'квитанция',
      'квиток', 'кедр', 'кекс', 'керамика', 'керосин', 'кета', 'кетчуп', 'кефир', 'киберпространство', 'кивок',
      'кизяк', 'киллер', 'километр', 'кино', 'кинотеатр', 'киоск', 'кипение', 'кирпич', 'кислород', 'кисть',
      'китаец', 'кладбище', 'клан', 'клапан', 'класс', 'клевер', 'клеть', 'клиент', 'климакс', 'клиника',
      'клинок', 'кличка', 'клоун', 'клуб', 'клубок', 'ключ', 'книга', 'книги', 'книжка', 'князь',
      'кобра', 'ковбой', 'ковка', 'коврик', 'ковчег', 'кожа', 'козырек', 'кокаин', 'коктейль', 'кол',
      'колба', 'колесо', 'колено', 'колеса', 'колечко', 'колибри', 'количество', 'колледж', 'колода', 'колокол',
      'колония', 'колонна', 'колпак', 'колхоз', 'колыбель', 'кольцо', 'коляска', 'командир', 'командировка', 'комбинация'
  ]
    
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
