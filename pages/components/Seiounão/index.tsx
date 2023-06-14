import React, { useState } from "react";

enum Section {
  Catalog = "CATALOG",
  Options = "OPTIONS",
  Finish = "FINISH",
  Coating = "COATING",
  Structure = "STRUCTURE",
}

const CatalogScreen: React.FC = () => {
  // Estado para controlar a seção atual
  const [section, setSection] = useState(Section.Catalog);

  const handleJaSeiClick = () => {
    // Redirecionar para o catálogo
    setSection(Section.Catalog);
  };

  const handleNaoSeiClick = () => {
    // Redirecionar para as opções
    setSection(Section.Options);
  };

  const handleOptionClick = (selectedOption: Section) => {
    // Redirecionar para a seção selecionada
    setSection(selectedOption);
  };

  return (
    <div>
      {section === Section.Catalog && (
        <div>
          {/* Conteúdo do catálogo */}
          <h2>Catálogo</h2>
          {/* ... */}
        </div>
      )}

      {section === Section.Options && (
        <div>
          {/* Opções disponíveis */}
          <h2>Não sei</h2>
          <button onClick={() => handleOptionClick(Section.Finish)}>Acabamento</button>
          <button onClick={() => handleOptionClick(Section.Coating)}>Revestimento</button>
          <button onClick={() => handleOptionClick(Section.Structure)}>Assentamento e Estrutura</button>
        </div>
      )}

      {section === Section.Finish && (
        <div>
          {/* Conteúdo da seção Acabamento */}
          <h2>Acabamento </h2>
          {/* ... */}
        </div>
      )}

      {section === Section.Coating && (
        <div>
          {/* Conteúdo da seção Revestimento */}
          <h2>Revestimento  e Assentamento</h2>
          {/* ... */}
        </div>
      )}

      {section === Section.Structure && (
        <div>
          {/* Conteúdo da seção Assentamento e Estrutura */}
          <h2> Estrutura</h2>
          {/* ... */}
        </div>
      )}

      <button onClick={handleJaSeiClick}>Já sei</button>
      <button onClick={handleNaoSeiClick}>Não sei</button>
    </div>
  );
};

export default CatalogScreen;



//Neste exemplo, temos a tela do catálogo com dois botões: "Já sei" e "Não sei". Ao clicar em "Já sei", o cliente será redirecionado para o catálogo em si. Ao clicar em "Não sei", serão exibidas três opções de botões: "Acabamento", "Revestimento" e "Assentamento e Estrutura". Cada botão representa uma seção diferente do catálogo, e ao selecionar uma opção, o cliente será redirecionado para a respectiva seção.

//Você pode adicionar o conteúdo adequado em cada seção do catálogo para exibir os produtos correspondentes.