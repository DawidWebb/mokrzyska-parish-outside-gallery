import React from "react";
import styles from "./tamporay.module.scss";

const Temporary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}></div>

      <h2>PROGRAM REKOLEKCJI WIELKOPOSTNYCH 10 – 13 KWIETNIA 2022</h2>
      <h2>Dekanalna spowiedź wielkopostna - 2022r.</h2>
      <div className={styles.element}>
        <p>
          <span>NIEDZIELA 10 KWIETNIA</span>
        </p>
        <p>7.30 – MSZA ŚW. Z NAUKĄ DLA WSZYSTKICH</p>
        <p>10.00 – MODLITWA RÓŻAŃCOWA W INTENCJI POKOJU NA ŚWIECIE</p>
        <p>10.30 - MSZA ŚW. Z NAUKĄ DLA WSZYSTKICH</p>
        <p>15.00 – GORZKIE ŻALE Z NAUKĄ REKOLEKCYJNĄ</p>
        <p>16.00 - MSZA ŚW.</p>
      </div>
      <div className={styles.element}>
        <p>
          <span>PONIEDZIAŁEK 11 KWIETNIA</span>
        </p>
        <p>
          <span>DZIEŃ SPOWIEDZI PARAFIALNEJ</span>
        </p>
        <p>7.30 – MODLITWA RÓŻAŃCOWA W INTENCJI POKOJU NA ŚWIECIE </p>
        <p>8.00 – MSZA ŚW. Z NAUKĄ DLA WSZYSTKICH</p>
        <p>9.00 – 10.00 - SPOWIEDŹ</p>
        <p>10.00 - MSZA ŚW. Z NAUKĄ DLA KLAS I – VIII</p>
        <p>11.00 – WYJAZD DO CHORYCH</p>
        <p>15.00 – 16.30 - SPOWIEDŹ </p>
        <p>16.30 - 17.00 - PRZERWA</p>
        <p>17.00 – 18.00 – SPOWIEDŹ</p>
        <p>18.00 - MSZA ŚW. Z NAUKĄ DLA WSZYSTKICH</p>
      </div>
      <div className={styles.element}>
        <p>
          <span>WTOREK – 12 KWIETNIA</span>
        </p>
        <p>7.30 – DROGA KRZYŻOWA</p>
        <p>8.00 – MSZA ŚW. Z NAUKĄ DLA WSZYSTKICH</p>
        <p>10.00 - MSZA ŚW. Z NAUKĄ DLA KLAS I – VIII</p>
        <p>17.30 – 18.00 – DROGA KRZYŻOWA</p>
        <p>18.00 - MSZA ŚW. Z NAUKĄ DLA WSZYSTKICH</p>
        <p className={styles.italian}>
          Każdy kto wysłucha trzech nauk rekolekcyjnych, wyspowiada się,
          przyjmie Komunię świętą oraz nie ma przywiązania do grzechu
          śmiertelnego, może uzyskać odpust zupełny i ofiarować go za siebie lub
          kogoś ze zmarłych. Ofiary na zakończenie rekolekcji przeznaczone są
          dla ks. Rekolekcjonisty.
        </p>
      </div>
      <div className={styles.element}>
        <p>
          <span>ŚRODA – 13 KWIETNIA</span>
          <p>8.00 - MSZA ŚW. Z NAUKĄ DLA KLAS I – VIII</p>
        </p>
      </div>
      <div className={styles.confession}>
        <h3>Harmonogram Dekanalnej spowiedzi wielkopostnej - 2022r.</h3>
        <table>
          <tr>
            <th>Lp.</th>
            <th>Data</th>
            <th>Parafia</th>
            <th>Godzina</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>04.04. Poniedziałek</td>
            <td>Borzęcin Górny</td>
            <td>
              <p>14.30 – 16.00 </p>
              <p>16.30 – 18.00</p>
              <p>19.00 – 20.00</p>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>05.04. Wtorek</td>
            <td>Maszkienice</td>
            <td>
              <p>09.00 - 10.00</p>
              <p>15.00 - 16.30</p>
              <p>17.00 - 18.00</p>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>09.04. Sobota</td>
            <td>Borzęcin Dolny</td>
            <td>
              <p>9.00 - 10.30</p>
              <p>11.00 - 12.00</p>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>09.04. Sobota</td>
            <td>Bucze</td>
            <td>
              <p>9.00 - 10.30</p>
              <p>11.00 - 12.00</p>
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td>09.04. Sobota</td>
            <td>Bielcza</td>
            <td>
              <p>14.00 - 15.30</p>
              <p>16.00 - 17.00</p>
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td>11.04. Poniedziałek</td>
            <td>Mokrzyska</td>
            <td>
              <p>09.00 - 10.00</p>
              <p>15.00 - 16.30</p>
              <p>17.00 - 18.00</p>
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td>12.04. Wtorek</td>
            <td>
              Szczepanów{" "}
              <span>Godz. 19.oo Droga Krzyżowa ulicami Szczepanowa</span>
            </td>
            <td>
              <p>08.30 - 10.00 </p>
              <p>10.30 - 12.00</p>
              <p>15.30 - 17.00</p>
              <p>17.30 - 19.00</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Temporary;
