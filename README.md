# 📱 Automação de Testes Mobile com Appium + WebdriverIO

## 📌 Sobre o projeto

Este projeto contém testes automatizados mobile desenvolvidos utilizando **Appium** e **WebdriverIO**, com foco na validação de funcionalidades de um aplicativo Android.

Foram automatizados fluxos importantes da aplicação, como:

* Login
* Cadastro
* Interações com formulários e componentes da aplicação
* Gestos de deslize (Swipe)
* Drag and Drop

## 🎓 Contexto

Projeto desenvolvido durante o curso de Qualidade de Software da EBAC, com implementações adicionais e melhorias além do conteúdo proposto, focando em boas práticas e organização dos testes.

## 📱 Aplicação utilizada

- App: WebdriverIO Native Demo App  
- Versão: 2.0.0  

O aplicativo utilizado nos testes **não está versionado neste repositório**.

Para executar os testes, é necessário baixar o app de demonstração:

🔗 https://github.com/webdriverio/native-demo-app/releases

Após o download, coloque o arquivo `.apk` na pasta:

```bash
/app
```

E configure o caminho no arquivo `wdio.conf.js`.

## ⚙️ Pré-requisitos

Ambiente necessário para executar o projeto:

- Node.js 
- Java JDK
- Android SDK
- Android Studio (emulador ou dispositivo físico)

## 🚀 Tecnologias utilizadas

Ferramentas e frameworks utilizados no desenvolvimento dos testes:

- WebdriverIO
- Appium
- JavaScript
- Appium Inspector

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```
git clone https://github.com/rm-oliveira/wdio-mobile-tests.git
```

### 2. Instalar dependências

```
npm install
```

### 3. Iniciar o Appium

```
npx appium
```

### 4. Executar em Dispositivo

**Emulador Android:**
- Inicie o Android Studio
- Execute um dispositivo virtual

**Dispositivo Real:**
- Ative a depuração USB
- Conecte via cabo USB

Verificar conexão:
```
adb devices
```

### 5. Executar os testes

Executar todos os testes:

```
npm test
```

Executar um teste específico:

```
npm test -- --spec ./test/specs/cadastro.spec.js
```

## ✅ Cenários automatizados

### Login

* Login com sucesso
* Validação de email e senha inválidos

### Cadastro

* Cadastro com sucesso
* Validação de email inválido
* Validação de senhas diferentes
* Validação de senha com menos de 8 caracteres

### Forms

* Interação com campos
* Manipulação de switch (ON/OFF)
* Ações com swipe e coordenadas

### Swipe

* Swipe vertical (scroll)
* Swipe horizontal (troca de cards)

### Drag and Drop

* Arrastar elementos
* Montagem completa do quebra-cabeça

## ⚠️ Desafios encontrados

* Identificação de elementos sem accessibility id
* Diferença entre elementos nativos e alerts
* Instabilidade em gestos (swipe/drag)
* Sincronização com elementos (waits)

## 💡 Boas práticas aplicadas

* Page Object Model (POM)
* Separação de responsabilidades
* Uso de seletores eficientes
* Testes independentes
* Reutilização de métodos

## 👩‍💻 Autora

Desenvolvido por Rayane 🚀