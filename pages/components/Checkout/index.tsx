import React, { useState } from "react";

const Checkout: React.FC = () => {
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");

  const handlePagamento = (opcao: string) => {
    setPagamento(opcao);
  };

  // Dados fictícios para exibição
  const produtos = [
    { nome: "Cimento", quantidade: 10, precoUnitario: 20.0 },
    { nome: "Brita", quantidade: 5, precoUnitario: 10.0 },
    { nome: "Pedra", quantidade: 3, precoUnitario: 15.0 },
  ];

  const frete = 25.0; // Valor fictício de frete

  const subtotal = produtos.reduce((total, produto) => total + produto.quantidade * produto.precoUnitario, 0);
  const total = subtotal + frete;

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
    paymentOption: {
      marginRight: "10px",
    },
    button: {
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    subtotal: {
      marginTop: "10px",
      fontWeight: "bold",
    },
    frete: {
      marginTop: "5px",
      marginBottom: "10px",
    },
    total: {
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>

      <label htmlFor="endereco" style={styles.label}>
        Endereço de entrega:
      </label>
      <input
        type="text"
        id="endereco"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        style={styles.input}
      />

      <h3>Produtos:</h3>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            {produto.nome} - Quantidade: {produto.quantidade} - Preço Unitário: R$ {produto.precoUnitario.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Opções de Pagamento:</h3>
      <div>
        <label style={styles.paymentOption}>
          <input type="radio" name="pagamento" value="dinheiro" onChange={() => handlePagamento("dinheiro")} />
          Dinheiro
        </label>
        <label style={styles.paymentOption}>
          <input type="radio" name="pagamento" value="pix" onChange={() => handlePagamento("pix")} />
          PIX
        </label>
        <label style={styles.paymentOption}>
          <input type="radio" name="pagamento" value="boleto" onChange={() => handlePagamento("boleto")} />
          Boleto Faturado
        </label>
      </div>

      <h3>Resumo do Pedido:</h3>
      <p style={styles.subtotal}>Subtotal: R$ {subtotal.toFixed(2)}</p>
      <p style={styles.frete}>Frete: R$ {frete.toFixed(2)}</p>
      <p style={styles.total}>Total: R$ {total.toFixed(2)}</p>

      <button style={styles.button}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
