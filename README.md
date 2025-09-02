# Sistema de Medidas Pessoais

Este repositório contém o **frontend** do projeto **Sistema de Medidas Pessoais**, desenvolvido como parte de um trabalho acadêmico.
A aplicação oferece uma interface simples e intuitiva para que usuários possam **cadastrar, consultar e gerenciar medidas corporais**, integrando-se ao backend.

---

## 🚀 Tecnologias Utilizadas

* **React** (com Vite)
* **TypeScript**
* **SASS**
* **Axios** (requisições HTTP)
* **React Router** (navegação)
* **Context API** (gerenciamento de autenticação e estado global)
* **Zustand**

---

## ⚙️ Configuração do Ambiente

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/seu-usuario/sistema-medidas.git
   cd sistema-medidas/frontend
   ```

2. **Instalar dependências**

   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente**
   Criar um arquivo `.env` baseado no `.env.example`:

   ```env
   VITE_APP_URL_API=http://localhost:{PORTA}
   ```

   > ⚠️ Esse valor deve apontar para a URL do **backend**.

4. **Rodar aplicação**

   ```bash
   npm run dev
   ```

   A aplicação ficará disponível em:
   👉 `http://localhost:5173`

---

## 📜 Scripts Disponíveis

* `npm run dev` → Executa em modo desenvolvimento
* `npm run build` → Gera versão de produção
* `npm run preview` → Pré-visualiza build
* `npm run lint` → Verifica problemas de estilo e boas práticas

---

## 🔑 Funcionalidades Principais

* **Autenticação de Usuários**

  * Cadastro, login, logout e refresh de sessão
* **Gerenciamento de Medidas**

  * Cadastro de medidas corporais
  * Listagem e edição de medidas
  * Compartilhamento via código público
---
