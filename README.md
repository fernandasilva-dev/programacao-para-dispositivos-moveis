# 📱 Navegação Avançada e UX no React Native

## 📌 Descrição do Projeto

Este projeto foi desenvolvido em **React Native**, utilizando **Expo**, com o objetivo de aplicar **navegação avançada** e **boas práticas de UX (User Experience)**.

O aplicativo utiliza **Bottom Tabs** e **Stack Navigator**, trata corretamente os estados de **Loading**, **Empty** e **Error**, garantindo que nenhuma tela fique em branco.
Também foi configurado **Deep Linking**, permitindo acessar diretamente a tela de detalhes por meio de uma URL.

---

## 🚀 Tecnologias Utilizadas

* React Native
* Expo
* React Navigation
* JavaScript

---

## 📥 Clonando o Repositório

No terminal, execute:

```bash
git clone https://github.com/SEU_USUARIO/navegacao-ux.git
```

Em seguida, acesse a pasta do projeto:

```bash
cd navegacao-ux
```

---

## 📦 Instalando as Dependências

Após clonar o repositório, instale **todas as dependências** com apenas um comando:

```bash
npm install
```

📌 Todas as bibliotecas necessárias já estão listadas no arquivo `package.json`.
Não é necessário instalar dependências manualmente.

---

## ▶️ Executando o Projeto

Para iniciar o aplicativo, utilize o comando:

```bash
npx expo start
```

Após iniciar, abra o app utilizando:

* 📱 **Expo Go (celular)**
  ou
* 🤖 **Emulador Android**

---

## 🧭 Estrutura de Navegação

A navegação do aplicativo segue a estrutura abaixo:

```text
Tabs
├── Home (Stack)
│   ├── Home
│   └── Details
└── Profile
```

### 📌 Navegadores Utilizados

* `NavigationContainer`
* `Bottom Tab Navigator`
* `Stack Navigator`

A aba **Home** possui um **Stack interno**, permitindo a navegação entre as telas **Home** e **Details**.

---

## 🖥️ Telas do Aplicativo

### 🏠 Tela Home

Funcionalidades:

* Exibe um título
* Simula carregamento de dados
* Trata os estados:

  * **Loading** (carregando dados)
  * **Empty** (nenhum dado encontrado)
* Possui botão para navegação até a tela **Details**

✔ Nenhuma tela permanece em branco.

---

### 📄 Tela Details

Funcionalidades:

* Recebe um parâmetro (`id`) via navegação
* Simula carregamento de dados
* Simula erro de carregamento
* Trata os estados:

  * **Loading**
  * **Error**
* Possui botão **“Tentar novamente”**

O valor do parâmetro recebido é exibido na tela.

---

### 👤 Tela Profile

Funcionalidades:

* Apresenta informações simuladas do usuário
* Exemplos de dados exibidos:

  * Nome
  * Email
  * Curso
  * Status

Essa tela possui caráter demonstrativo e melhora a experiência do usuário.

---

## 🎯 Boas Práticas de UX Aplicadas

* Nenhuma tela fica em branco
* Tratamento explícito de:

  * **Loading**
  * **Empty**
  * **Error**
* Mensagens claras para o usuário
* Botões de ação para recuperação de erro
