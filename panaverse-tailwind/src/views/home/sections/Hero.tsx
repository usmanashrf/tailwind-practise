import React from 'react'
import Image from 'next/image'
import NavBar from '@/views/navBar'
import ApplyButton from '@/components/navBar/ApplyButton'
import HeroText from './HeroText'
import HeroCharacter from '@/assets/images/HeroCharacter'


export default function Hero() {
  return (
    <div  className='flex-1 -z-10 '>
     <div className='grid grid-cols-2 '>
        <div><HeroText></HeroText></div>
        <div className='absolute z-10 left-[824px] top-[239px]'><HeroCharacter></HeroCharacter></div>
     </div>
     <div  className='flex-1'>
        <Image width={"1840"} height={"1280"} alt='HeroBg' src={"/Hero-BG.png"}></Image>
     </div>
     </div>
  )
}
