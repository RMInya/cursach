import React from "react";
import "./pages.css";
import builderimg from "../images/builder.jpg";
import city from "../images/mainpagecity.jpg";

export const MainPage = () => {
  return (
    <section id="about">
      <div class="about-wrapper container">
        <div class="about-text">
          <h2>Від проектування до реалізації</h2>
          <p>
            Наша компанія надає широкий спектр будівельних послуг для різних
            типів проектів. Ми спеціалізуємося на проектуванні, будівництві та
            реконструкції будівель, які включають житлові, комерційні,
            промислові та інфраструктурні об'єкти. Наша команда професіоналів
            володіє великим досвідом у будівельній галузі і працює з високим
            рівнем експертизи. Ми забезпечуємо повний спектр послуг, включаючи
            планування, проектування, земляні роботи, конструкцію, електрику,
            сантехніку, системи опалення та кондиціонування повітря, інсталяцію
            систем безпеки, внутрішнє та зовнішнє оздоблення, а також інші
            будівельні послуги.
          </p>
        </div>
        <div class="about-img">
          <img src={""} />
        </div>
      </div>
      {/* <section id="projects">
        <div className="container">
          <div className="text">
            <h2>Наші Проекти</h2>
          </div>
          <div className="projects-img"></div>
        </div>
      </section> */}
    </section>
  );
};
