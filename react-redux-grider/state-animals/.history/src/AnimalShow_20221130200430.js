import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'

import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'

const svgMap = {
    bird, 
    cat, 
    cow, 
    dog, 
    gator, 
    horse,
    heart
}

const AnimalShow = ({animal}) => {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }

  return (
    <div onClick={handleClick}>
        <img alt={animal} src={svgMap[animal]} style={{width: '25vw'}} />
        <img alt='heart' src={heart} style={{width: 10 + 10 * clicks}} />
    </div>
  )
}

export default AnimalShow