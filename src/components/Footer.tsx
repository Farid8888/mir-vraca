import React from "react";
import Image from "next/image";
import vector4 from "./../assets/Vector 48.png";
import Card from "./Card";
import gr1 from "./../assets/Group 7.png";
import gr2 from "./../assets/Group 7-1.png";
import gr3 from "./../assets/Group 7-2.png";
import line1 from "./../assets/Group 8.png";
import line2 from "./../assets/Group 9.png";
import classes from "./../styles/Footer.module.css";

const Footer = () => {
  const titles = [
    "Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов",
    "Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции",
    "Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей",
  ];
  const headers = ["антихолинергик", "β2-агонист", "глюкокортикостероид"];
  return (
    <div className={classes.footer}>
      <Image src={vector4} alt="v4" priority className={classes.vector} />
      <h2>Терапия ХОБЛ: что в фокусе?</h2>
      <div className={classes.back}>
        <p>
          Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
        </p>
      </div>
      <h4>
        Приоритетные направления фармакотерапевтической стратегии при ХОБЛ
        <sup>1</sup>:
      </h4>
      <div className={classes.cardFlex}>
        <Card
          gr={gr1}
          grTitle="gr1"
          title={titles[0]}
          head={headers[0]}
          num="1"
        />
        <Card gr={gr2} grTitle="gr2" title={titles[1]} head={headers[1]} />
        <Card
          gr={gr3}
          grTitle="gr3"
          title={titles[2]}
          head={headers[2]}
          third="(ИГКС)"
        />
      </div>
      <div className={classes.lines}>
        <Image src={line1} alt="line1" priority />
        <Image src={line2} alt="line2" priority />
      </div>
      <div className={classes.bottom}>
        <div>
          <p>
            Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с
            разными механизмами действия; Назначение 2-х бронходилататоров из
            группы длительнодействующих β2-агонистов (ДДБА) и
            длительнодействующих антихолинергиков (ДДАХ), действие которых
            дополняет и усиливает друг друга<sup>1</sup>.
          </p>
        </div>
        <div className={classes.last}>
          <p>
            Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений
            в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации)
            рекомендуется назначение ИГКС в дополнение к ДДБА; 
            </p>
            <p style={{margin:0}}>Последние
            исследования показали, что амбулаторное применение ИГКС/ДДБА у
            пациентов с ХОБЛ снижает госпитальную летальность по сравнению с
            пациентами, принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
