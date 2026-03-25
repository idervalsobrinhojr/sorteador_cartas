# sorteador_cartas
Sorteador de Cartas

As imagens das cartas estão na pasta "imagens". 
Para criar um novo deck basta mudar as linhas abaixo (BANCO DE DADOS [JSON EMBUTIDO]) no index.html:

const bancoOriginal = [
  { nome: "Carta X", arquivo: "imagens/suaImagem.png" }
];


Alterando o tamanho das cartas

Altere o CSS na linha:
img {
  max-width: 150px;

  
