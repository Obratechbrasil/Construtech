import React, { useState } from "react";
import Sacola from "../Sacola";

const CalculadoraCimento: React.FC = () => {
  const [volume, setVolume] = useState(0);
  const [obra, setObra] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcularQuantidadeCimento = () => {
    let quantidade = 0;

    if (volume > 0 && obra !== "") {
      if (obra === "Fundação") {
        quantidade = Math.ceil(volume) * 7;
      } else if (obra === "Pilar" || obra === "Viga") {
        quantidade = Math.ceil(volume) * 8;
      } else if (obra === "Laje") {
        quantidade = Math.ceil(volume) * 8;
      }
    }

    setResultado(quantidade);
  };

  const sugerirOutrosProdutos = () => {
    const produtos = [];

    if (obra === "Fundação" || obra === "Pilar" || obra === "Viga") {
      produtos.push("Areia", "Pedra", "Concreto");
    }

    return produtos;
  };

  const handleIrParaSacola = () => {
    window.location.href = "/sacola"; // Substitua "/sacola" pela URL da sua página de sacola de compras
  };
  

  const precoSacoCimento = 20.0; // Preço de cada saco de cimento em reais

  const styles = {
    container: {
      fontFamily: "400",
      padding: "20px",
      backgroundColor: "#f2f2f2",
    },
    label: {
      marginBottom: "10px",
    },
    input: {
      marginBottom: "10px",
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    select: {
      marginBottom: "10px",
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    result: {
      marginTop: "10px",
    },
    otherProducts: {
      marginTop: "10px",
    },
    productList: {
      listStyleType: "disc",
      marginLeft: "20px",
    },
    price: {
      marginTop: "10px",
    },
    goToCartButton: {
      
      marginTop: "10px",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <label htmlFor="volume" style={styles.label}>
        Volume total (m³):
      </label>
      <input
        type="number"
        id="volume"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        style={styles.input}
      />

      <label htmlFor="obra" style={styles.label}>
        Tipo de obra:
      </label>
      <select
        id="obra"
        value={obra}
        onChange={(e) => setObra(e.target.value)}
        style={styles.select}
      >
        <option value="">Selecione</option>
        <option value="Fundação">Fundação</option>
        <option value="Pilar">Pilar</option>
        <option value="Viga">Viga</option>
        <option value="Laje">Laje</option>
      </select>

      <button onClick={calcularQuantidadeCimento} style={styles.button}>
        Calcular
      </button>

      {resultado > 0 && (
        <p style={styles.result}>A sua obra precisa de {resultado} sacos de cimento.</p>
      )}

      {obra !== "" && (
        <div style={styles.otherProducts}>
          <p>Se você vai comprar cimento, você também vai precisar dos seguintes produtos:</p>
          <ul style={styles.productList}>
            {sugerirOutrosProdutos().map((produto, index) => (
              <li key={index}>{produto}</li>
            ))}
          </ul>
          <p style={styles.price}>
            O preço total dos sacos de cimento é de R$ {resultado * precoSacoCimento}.
          </p>
          <button onClick={handleIrParaSacola} style={styles.goToCartButton}>
            <Sacola/>
            Ir para Sacola
          </button>
        </div>
      )}
    </div>
  );
};

export default CalculadoraCimento;
//Deixei o css integrado aqui mas depois vamos separar ele por hora vamos deixar aqui e alteramos tudo depois 