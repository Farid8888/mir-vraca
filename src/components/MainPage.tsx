import React from 'react'
import classes from './../styles/MainPage.module.css'
import vector4 from './../assets/Vector 48.png'
import Image from 'next/image'
import Body from './Body'
import Footer from './Footer'

const MainPage = () => {
  return (
    <div className={classes.main}>
       <Image src={vector4} alt='v4' priority className={classes.v4}/>
       <h3>ХОБЛ: мифы и реальность</h3>
       <Body/>
       <Footer/>
    </div>
  )
}

export default MainPage
