import React from "react";
import Image from "next/image";
import classes from "./../styles/FirstPage.module.css";
import diaq from './../assets/Group 44.png'

const FirstPage = () => {
  return (
    <div className={classes.first}>
      <p>
        В десятилетнем исследовании <span>«Генетическая эпидемиология ХОБЛ» (COPDGene) </span>
         среди <br></br> пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
        <span>  преобладание женщин (66%),</span><br></br> а в возрасте 60-64 лет количество женщин и
        мужчин.
      </p>
      <p>
        Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть
        связано с тем, что дыхательные пути курящих женщин имеют более <span>высокий
        процент площади стенок,</span> но меньшую площадь просвета, внутренний диаметр
        и толщину дыхательных путей по сравнению с курящими мужчинами.
      </p>
      <Image src={diaq} alt="diaq" priority/>
    </div>
  );
};

export default FirstPage;
