import React from 'react'
import Image from 'next/image'
import MainPage from './MainPage'
import vector1 from './../assets/Vector 45.png'
import vector2 from './../assets/Vector 46.png'
import vector3 from './../assets/Vector 47.png'
import classes from '../styles/Back.module.css'

const Back = () => {
  return (
    <div>
        <Image src={vector1} alt='v1' priority className={classes.v1}/>
        <Image src={vector2} alt='v2' priority className={classes.v2}/>
        <Image src={vector3} alt='v3' priority className={classes.v3}/>
        <MainPage/>
    </div>
  )
}

export default Back
