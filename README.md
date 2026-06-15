# 🦾 Academia Perfformance - Landing Page

Uma Landing Page moderna, responsiva e de alta performance desenvolvida para a **Academia Perfformance**. O projeto foi estruturado com foco em entregar um design industrial, robusto e focado em conversão, alinhando uma identidade visual forte (tons escuros com detalhes em vermelho e azul vibrantes) a uma arquitetura de código limpa e modular.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza a stack mais moderna e otimizada do ecossistema Frontend atual:

* **[React](https://react.dev/)** — Biblioteca para construção de interfaces modulares baseadas em componentes.
* **[Vite](https://vitejs.dev/)** — Build tool ultra-rápido que substitui o Create React App com performance superior de compilação.
* **[TypeScript](https://www.typescriptlang.org/)** — Superset do JavaScript que adiciona tipagem estática, garantindo maior robustez e previsibilidade ao código.
* **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitário para estilização rápida, responsiva e otimizada diretamente nas classes dos elementos.

---

## 🚀 Como Rodar o Projeto na sua Máquina

Siga o passo a passo abaixo para clonar o repositório, instalar as dependências e subir o servidor de desenvolvimento local.

### 1. Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

* **Node.js** (Versão 18 ou superior recomendada)
* **npm** (Geralmente já vem instalado com o Node)

### 2. Clonar o Repositório

Abra o seu terminal na pasta onde deseja salvar o projeto e clone utilizando o link HTTPS direto:

```bash
git clone [https://github.com/isamartins-engcomput/AcademiaPerfformance.git](https://github.com/isamartins-engcomput/AcademiaPerfformance.git)
```

### 3. Acessar a Pasta do Projeto

Navegue para dentro do diretório criado:

```bash
cd AcademiaPerfformance
```

### 4. Instalar as Dependências

A pasta `node_modules` com as bibliotecas do projeto não é enviada para o GitHub por boas práticas. Reconstrua o ambiente rodando o gerenciador de pacotes:

```bash
npm install
```

*(Aguarde o término da instalação dos pacotes necessários).*

### 5. Iniciar o Servidor de Desenvolvimento

Com tudo configurado, dê o boot no motor do Vite:

```bash
npm run dev
```

Assim que o compilador terminar (o que acontece em milissegundos), o terminal exibirá o endereço local. Geralmente será:
👉 **[http://localhost:5173/](http://localhost:5173/)**

Basta abrir essa URL no seu navegador para ver a aplicação rodando ao vivo!

---

## 📁 Estrutura de Pastas Simplificada

Para facilitar a navegação do grupo pelo código, aqui estão os pontos principais da arquitetura:

```text
├── src/
│   ├── components/  # Componentes modulares e reutilizáveis da interface
│   ├── assets/      # Imagens, logos e arquivos de mídia estáticos
│   ├── App.tsx      # Componente principal que orquestra as seções da página
│   ├── main.tsx     # Ponto de entrada do React que inicializa a aplicação
│   └── index.css    # Configurações globais do Tailwind CSS
├── tailwind.config.js # Customização do tema e paleta de cores (Azul/Vermelho Perfformance)
└── package.json     # Scripts do projeto e controle de dependências
```

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, temos os seguintes comandos configurados:

* `npm run dev`: Inicia o servidor local de desenvolvimento com HMR (*Hot Module Replacement*).
* `npm run build`: Compila e otimiza o código para produção, gerando arquivos puros de alta performance na pasta `dist/`.
* `npm run preview`: Executa localmente o build de produção para testes antes do deploy definitivo.

---
