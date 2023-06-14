import React from "react";

const AcompanhamentoDelivery: React.FC = () => {
  const construtora = "Construtora ABC"; // Nome da construtora
  const nomeMotorista = "João Silva"; // Nome do motorista
  const placaTransporte = "XYZ-1234"; // Placa do veículo de transporte
  const horaPrevistaEntrega = "15:30"; // Hora prevista de entrega

  const styles = {
    // Estilos
  };

  return (
    <div style={styles.container}>
      <h2>Acompanhamento do Delivery</h2>

      {/* Nome da construtora */}
      <p>Construtora: {construtora}</p>

      {/* Nome do motorista */}
      <p>Motorista: {nomeMotorista}</p>

      {/* Placa do veículo */}
      <p>Placa do Veículo: {placaTransporte}</p>

      {/* Hora prevista de entrega */}
      <p>Hora Prevista de Entrega: {horaPrevistaEntrega}</p>
    </div>
  );
};

export default AcompanhamentoDelivery;