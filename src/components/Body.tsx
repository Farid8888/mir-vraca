import React from "react";
import Image from "next/image";
import Touch from "./Touch";
import img1 from "./../assets/Group 3.png";
import img2 from "./../assets/Group 2.png";
import img3 from "./../assets/Group 4.png";
import img4 from "./../assets/Group 2-1.png";
import tch1 from "./../assets/Group 118.png";
import tch2 from "./../assets/Group 117.png";
import classes from "./../styles/Body.module.css";

const Body = () => {
  return (
    <div className={classes.main}>
      <div className={classes.inner}>
        <Touch tp={tch1} cl={classes.tch1} alt="tch1" links="/page1" />
        <Image
          src={img2}
          alt="img2"
          priority
          className={classes.img2}
        />
        <Image
          src={img1}
          alt="img1"
          priority
          className={classes.img1}
        />
        <div>
          <p>
            В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
            (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было
            выявлено преобладание...
          </p>
          <div className={classes.rec}></div>
        </div>
      </div>
      <div className={`${classes.inner} ${classes.inner2}`}>
        <Touch tp={tch2} cl={classes.tch2} alt="tch2" links="/page2" />
        <Image
          src={img4}
          alt="img4"
          priority
          className={classes.img2}
        />
        <Image
          src={img3}
          alt="img3"
          priority
          className={classes.img1}
        />
        <div>
          <p>
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение...
          </p>
          <div className={classes.rec2}></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
