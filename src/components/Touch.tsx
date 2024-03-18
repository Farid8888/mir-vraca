import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './../styles/Touch.module.css'

const Touch = ({cl,tp,alt,links}:{cl:string,tp:any,alt:string,links:string}) => {
  return (
    <div className={`${classes.tch} ${cl}`}>
            <Link href={links}><Image src={tp} alt={alt} priority/></Link>
        </div>
  )
}

export default Touch
