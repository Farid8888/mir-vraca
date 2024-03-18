import React from "react";
import Image from "next/image";
import classes from "./../styles/Card.module.css";

const Card = ({
  gr,
  grTitle,
  title,
  head,
  third,
  num
}: {
  gr: any,
  grTitle: string,
  title: string,
  head: string,
  third?:string,
  num?:string
}) => {
  return (
    <div className={classes.card}>
      <Image src={gr} priority alt={grTitle} className={classes.imgs}/>
      <div className={classes.ing}>
        <p className={classes.head1}>Ингаляционный</p>
        <p className={classes.head2}>{head}</p>
        <p className={classes.head1}>{third}</p>
      </div>
      <p className={classes.head3}>{title}<sup>{num}</sup></p>
    </div>
  );
};

export default Card;
