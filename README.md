# pokedex
Pokedex react project

Ola tudo bem, vamos rodar a Pokedex,

Aqui está um passo a passo basico sobre como instalar e rodar o projeto em sua maquina.


INSTALAÇÃO:

Esse projeto foi feito em React JS para rodar em sua maquina garanta ter o Node instalado: https://nodejs.org/en/download/current

Proximo passo vamos a instalação, você pode fazer a instalação por um terminal como git bash, CMD, powershell e etc..., um que seja de sua escolha,
pgaranta que tenha para esse tipo de instalação o .git em sua maquina, você tambem precisara do link para download ou código SSH pelo gitHub
para identificar o projeto que está instalando para se conseguir o mesmo basta ir na home do projeto no site do gitHub e Apertar em "<> CODE".

Após escolher o terminal e ter o link de download basta usar o comando:

* git clone "link de download ou código SSH"

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/a3b742b1-207b-4567-af1c-7b4d35d3bcd4)

Apos ter instalado basta abrir o mesmo em um editor de texto(VSCode, Visual Studio 2024 e etc..) para visualizar o código.


RODAR O PROJETO:

Apos ter aberto o mesmo no seu editor de texto abra um terminal pode ser o do seu editor de texto, apenas garanta que esta instalando na mesma
pasta que está os arquivos dentro do projeto(arquivos com o nome SRC, PUBLIC, ReadME), e rode o comando abaixo:

* npm install

ou caso esteja utilizando o Yarn:

* yarn install

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/ffa5bd41-0b66-46a2-909d-d2ccb838a5da)


isso ira instalar o node_modules em seu projeto que é responsavel por todas as dependencias usadas na codificação. Após a instalação que pode demorar
um pouco vai depender de sua maquina e internet, ja pode rodar o projeto no seu terminal com o comando:

* npm start

ou caso esteja utilizando o Yarn:

* yarn start

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/7259129b-d581-46ad-94d6-ac5cd9fde325)


caso rode tudo ok ira abrir uma aba no seu navegador com o projeto rodando, caso não aconteca basta abrir no navegador, e colocar http://localhost:3000/.
e podera visualizar a imagem abaixo:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/65092681-a4b6-44f0-b8b2-f7ef0d8e2a0a)

e assim ja poderá ver o código e o funcionamento do mesmo.


TESTES UNITARIOS:

Esse projeto contem testes unitarios feito com Jest. para rodar os mesmo abra um terminal na raiz do projeto, e rode os comandos abaixo:

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

Foi seguido conforme o protótipo porem algumas coisas não foram possiveis fazer identicas apenas baseadas: 
 
* Imagem que deveria ter fundo cinza no protótipo porem ela tem fundo branco.

como deveria estar:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/ce6a3318-e867-4f76-b04d-d3482beff3c5) 

como está:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/9813fc87-f850-49a6-9d11-5a760762e74b)

* O icone do header que indica sair da aplicação, foi usado da biblioteca https://fontawesome.com, porem na versão
gratuita não tem do formato pedido.

como deveria estar:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/af545874-a394-4804-aad6-7de9c6f9d7b7)

como está:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/111afcce-9c47-4884-9f81-a8942ac37b72)


algumas imagem não foi possivel inserir devido a estar com bug no link da mesma:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/5080ab91-ea3e-4d76-bc7a-cb1ade327a2e)

está com caracteres especiais no link por isso travou:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/0157c221-6df3-4132-b5dc-868eebda330c)


foi realizado um Filtro para não renderizar duplicidades de pokemons pois na API existem algumas duplicidades:

![image](https://github.com/isaacl-bueno/pokedex/assets/86806394/737569de-fe11-4526-bd53-f511f2fd5c4b)


é isso espero que goste do meu projeto e arquitetura.




