import React from "react";

const Pedido: React.FC = () => {
  const pedidoStatus = "Preparando"; // Status do pedido: Preparando, Pronto, Entregue, Atrasado
  const horaPedido = "14:30"; // Hora do pedido
  const quantidadeItens = 3; // Quantidade de itens comprados
  const valorProdutos = 120.0; // Valor total dos produtos
  const enderecoEntrega = "Rua Exemplo, 123"; // Endereço de entrega
  const formaPagamento = "Pix"; // Forma de pagamento
  const valorFrete = 10.0; // Valor do frete
  const valorTotal = valorProdutos + valorFrete; // Valor total do pedido

  const handlePagar = () => {
    // Lógica para realizar o pagamento
    // Aqui você pode adicionar a integração com um serviço de pagamento real
    // e realizar as etapas necessárias para processar o pagamento.
    alert("Pagamento realizado com sucesso!");
  };

  const styles = {
    // Estilos
  };

  return (
    <div style={styles.container}>
      <h2>Acompanhamento do Pedido</h2>

      {/* Aviso de preparação do pedido */}
      <p>O material que você pediu está sendo preparado. Aguarde a mudança de status.</p>

      {/* Status do pedido */}
      <p>Status do Pedido: {pedidoStatus}</p>

      {/* Hora do pedido */}
      <p>Hora do Pedido: {horaPedido}</p>

      {/* Quantidade de itens */}
      <p>Quantidade de Itens: {quantidadeItens}</p>

      {/* Valor e detalhes dos produtos */}
      <p>Detalhes do Pedido:</p>
      {/* Lista de produtos e seus valores */}

      {/* Endereço de entrega */}
      <p>Endereço de Entrega: {enderecoEntrega}</p>

      {/* Forma de pagamento */}
      <p>Forma de Pagamento: {formaPagamento}</p>

      {/* Valor dos produtos */}
      <p>Valor dos Produtos: R$ {valorProdutos.toFixed(2)}</p>

      {/* Valor do frete */}
      <p>Valor do Frete: R$ {valorFrete.toFixed(2)}</p>

      {/* Valor total */}
      <p>Total: R$ {valorTotal.toFixed(2)}</p>

      {/* Botão de pagar */}
      <button style={styles.button} onClick={handlePagar}>
        Pagar
      </button>
    </div>
  );
};

export default Pedido;