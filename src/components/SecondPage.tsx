import React from "react";
import Image from "next/image";
import fr1 from './../assets/Frame 11.png'
import fr2 from './../assets/Frame 12.png'
import fr3 from './../assets/Frame 13.png'
import classes from "./../styles/SecondPage.module.css";

const SecondPage = () => {
  return (
    <div className={classes.second}>
      <p>
        Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно <br></br>
        среднетяжелое или тяжелое обострение случится в течение 3 лет у 77%
        пациентов<sup>1</sup>.
      </p>
      <p>
        В течение 5 лет после первого тяжёлого обострения в живых остаются
        только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при
        сердечной недостаточности, инфаркте миокарда и некоторых злокачественных
        опухолях.
      </p>
        <h2>Пятилетняя выживаемость пациентов</h2>
        <div className={classes.box}>
          <Image src={fr1} alt='fr1' priority/>
          <Image src={fr2} alt='fr2' priority/>
          <Image src={fr3} alt='fr3' priority/>
        </div>
    </div>
  );
};

export default SecondPage;
