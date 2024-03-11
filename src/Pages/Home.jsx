import React from 'react'
import { Carusoel } from '../Components/Carusoel'
import { Card01 } from '../Components/Card01'
import { Card02 } from '../Components/Card02'
import MediaCard1  from './Card3'
import  MediaCard2  from './Card4'
import  MediaCard3  from './Card5'


const Home = () => {
  return (
    <div>
      <Carusoel />
      <div  className='flex m-[50px] justify-between flex-wrap'>
        < MediaCard1/>
        <MediaCard2/>
        <MediaCard3/>
      </div>
<div className='flex flex-wrap'>
<Card01/>
      <Card02/>
</div>

    </div>
  )
}

export { Home }