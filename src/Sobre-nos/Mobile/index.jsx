import React from "react";
import "./sass/styles.css";
import office from "../../assets/images/sobre-nos/office.png";

function SobreNosMob() {
  return (
    <div className={"sobre-nos-container"}>
      <div className={"first-block"}>
        <h2 className={"first-block-tittle"}>
          "Desenvolver a melhor experiência de compra em e-commerce que o mundo
          já viu"
        </h2>
        <p className={"first-block-text"}>
          Somos um time especialista, dedicado e cuidadoso que não acredita no
          modo “fábrica” de fazer e-commerce.
        </p>
        <p className={"first-block-text"}>
          Nascemos com o propósito de implementar cada projeto de forma única.
          Nós amamos entender e conhecer cada um de nossos clientes e é por
          conta disso que conseguimos sempre criar algo especial e único.
          e-commerce.
        </p>
        <p className={"first-block-text"}>e-commerce.</p>
        <img className={"office-img"} src={office}></img>
      </div>
    </div>
  );
}

export default SobreNosMob;
