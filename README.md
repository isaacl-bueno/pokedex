# pokedex
Pokedex react project

Ola tudo bem, vamos rodar a Pokedex,

Aqui está um passo a passo basico sobre como instalar e rodar o projeto em sua maquina.


INSTALAÇÃO:

Esse projeto foi feito em React JS para rodar em sua maquina garanta ter o Node instalado(https://nodejs.org/en/download/current).

Próximo passo: vamos à instalação. Você pode fazer a instalação por um terminal como Git Bash, CMD, PowerShell, etc., um que seja de sua escolha.
Certifique-se de que tenha para esse tipo de instalação o .git em sua máquina(https://git-scm.com/). Você também precisará do link para download ou código SSH pelo GitHub para identificar o projeto que está instalando. 
Para conseguir o mesmo, basta ir à home do projeto no site do GitHub e apertar em '<> CODE':

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/c4836272-9da8-4118-9ad6-d6c179a1c9ac)

Após escolher o terminal e ter o link de download basta usar o comando:

* git clone "link de download ou código SSH"

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/a3b742b1-207b-4567-af1c-7b4d35d3bcd4)

Após ter instalado, basta abrir o projeto em um editor de texto como o VSCode, Visual Studio 2024, etc., para visualizar o código.


RODAR O PROJETO:

Após ter aberto o projeto no seu editor de texto, abra um terminal, que pode ser o do seu editor de texto. Certifique-se apenas de estar
na mesma pasta onde estão os arquivos dentro do projeto (arquivos com os nomes SRC, PUBLIC, README), e execute o comando abaixo:

* npm install

ou caso esteja utilizando o Yarn:

* yarn install

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/ffa5bd41-0b66-46a2-909d-d2ccb838a5da)



Isso irá instalar o node_modules em seu projeto, que é responsável por todas as dependências usadas na codificação. 
Após a instalação, que pode demorar um pouco dependendo da sua máquina e conexão com a internet, você já pode rodar o projeto no seu terminal com o comando:

* npm start

ou caso esteja utilizando o Yarn:

* yarn start

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/7259129b-d581-46ad-94d6-ac5cd9fde325)


Caso tudo corra conforme o esperado, uma aba no seu navegador será aberta automaticamente com o projeto rodando. 
Se isso não acontecer, basta abrir o navegador e digitar http://localhost:3000/ na barra de endereço para visualizar o projeto. Você poderá ver a projeto abaixo:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/65092681-a4b6-44f0-b8b2-f7ef0d8e2a0a)

e assim ja poderá ver o código e o funcionamento do mesmo.


TESTES UNITARIOS:

Este projeto contém testes unitários feitos com Jest. Para executá-los, abra um terminal na raiz do projeto e execute os comandos abaixo:

* npm run test ReviewCard.spec.jsx
* npm run test buttons.spec.jsx
* npm run test select.spec.jsx
* npm run test ReviewCard.spec.jsx
* npm run test CustomizedInputBase.spec.jsx

ou o teste da aplicação toda:

* npm run test

caso usar yarn:

* yarn test ReviewCard.spec.jsx
* yarn test buttons.spec.jsx
* yarn test select.spec.jsx
* yarn test ReviewCard.spec.jsx
* yarn test CustomizedInputBase.spec.jsx

ou o teste da aplicação toda:

* yarn test

exemplo:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/752db34b-ed38-4dee-ab1f-77dae316b4e8)

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/0e0f7c03-a129-4c7c-a1cf-33570546190c)



OBSERVAÇÕES: 

Foi seguido conforme o protótipo, porém algumas coisas não foram possíveis de fazer idênticas, apenas baseadas como mostra abaixo:
 
* A imagem que deveria ter um fundo cinza no protótipo, porém, tem fundo branco como mostra abaixo:

   Como está no protótipo:
   
   ![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/ce6a3318-e867-4f76-b04d-d3482beff3c5) 
   
   Como ficou o projeto final:
   
   ![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/9813fc87-f850-49a6-9d11-5a760762e74b)

* O ícone do header que indica sair da aplicação foi utilizado da biblioteca https://fontawesome.com. No entanto, na versão gratuita, não há o formato pedido como mostra abaixo:

   Como está no protótipo:
   
   ![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/af545874-a394-4804-aad6-7de9c6f9d7b7)
   
   Como ficou o projeto final:
   
   ![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/111afcce-9c47-4884-9f81-a8942ac37b72)



Algumas imagens não puderam ser inseridas devido a estarem com bugs nos links.

   ![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/5080ab91-ea3e-4d76-bc7a-cb1ade327a2e)

Elas estão com caracteres especiais no link, por isso travaram.

   ![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/0157c221-6df3-4132-b5dc-868eebda330c)


Foi realizado um filtro para não renderizar duplicidades de pokemons, pois na API existem algumas duplicidades como mostra abaixo:

   ![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/737569de-fe11-4526-bd53-f511f2fd5c4b)


É isso! Espero que tenha gostado do meu projeto e da arquitetura por trás dele. 
Se tiver mais alguma dúvida ou sugestão, estou à disposição. 

Até mais!




