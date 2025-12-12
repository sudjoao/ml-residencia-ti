# 🎬 Apresentação Web Interativa - Sistema de Recomendação de Animes

Apresentação web interativa com 17 slides navegáveis sobre o projeto de Sistema de Recomendação de Animes desenvolvido para a Residência em TI - TJGO.

---

## 📋 Pré-requisitos

Antes de executar a apresentação, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
  - Download: https://nodejs.org/
  - Verificar instalação: `node --version`
  
- **npm** (geralmente vem com Node.js)
  - Verificar instalação: `npm --version`

---

## 🚀 Instalação

### 1. Clone o repositório (se ainda não fez)

```bash
git clone https://github.com/sudjoao/ml-residencia-ti.git
cd ml-residencia-ti
```

### 2. Navegue até a pasta da apresentação

```bash
cd apresentacao-web
```

### 3. Instale as dependências

```bash
npm install
```

Isso instalará os seguintes pacotes:
- `express` - Framework web para Node.js
- `compression` - Middleware de compressão
- `cors` - Middleware para CORS
- `helmet` - Middleware de segurança

---

## ▶️ Como Executar

### Opção 1: Usando Node.js diretamente

```bash
node server.js
```

### Opção 2: Usando npm start (se configurado)

```bash
npm start
```

Após executar, você verá uma mensagem no terminal:

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   🚀 SERVIDOR RODANDO COM SUCESSO!                        ║
║                                                            ║
║   📍 URL: http://localhost:3000                           ║
║                                                            ║
║   🎬 Apresentação disponível em:                          ║
║      http://localhost:3000/apresentacao                   ║
║                                                            ║
║   📊 Total de slides: 17                                  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## 🌐 Acessando a Apresentação

1. **Abra seu navegador** (Chrome, Firefox, Safari, Edge)

2. **Acesse a URL:**
   - Página inicial: http://localhost:3000
   - Apresentação direta: http://localhost:3000/apresentacao

3. **Clique em "🚀 Iniciar Apresentação"** na página inicial

---

## ⌨️ Navegação

### Usando o Teclado (Recomendado)

- **Seta Direita (→)** ou **Espaço** - Avançar para o próximo slide
- **Seta Esquerda (←)** - Voltar para o slide anterior
- **Home** - Ir para o primeiro slide
- **End** - Ir para o último slide
- **F11** - Modo tela cheia (navegador)

### Usando Botões na Tela

- **◀ Anterior** - Voltar um slide
- **🏠 Início** - Voltar para a página inicial
- **Próximo ▶** - Avançar um slide

---

## 📊 Estrutura da Apresentação

A apresentação contém **17 slides** organizados da seguinte forma:

1. **Capa** - Título, equipe e instituição
2. **Agenda e Contexto** - Metodologia CRISP-DM
3. **O Problema** - Desafio de recomendação
4. **Objetivos e Métricas** - KPIs e metas
5. **Dataset e Estrutura** - Dados utilizados
6. **Análise Exploratória** - Insights principais
7. **Pipeline de Pré-processamento** - 5 transformadores
8. **Decisões Técnicas** - Justificativas
9. **Algoritmo Escolhido** - Filtragem Colaborativa
10. **Como o Algoritmo Funciona** - Detalhamento técnico
11. **Exemplo Real** - Recomendações práticas
12. **Metodologia de Validação** - Processo de teste
13. **Resultados** - Métricas alcançadas
14. **Análise Qualitativa** - Pontos fortes e limitações
15. **Principais Conquistas** - Trabalhos futuros
16. **Aplicabilidade no TJGO** - Casos de uso jurídicos
17. **Conclusão** - Agradecimentos

---

## 🛑 Parando o Servidor

Para parar o servidor, pressione:

```
Ctrl + C
```

no terminal onde o servidor está rodando.

---

## 📁 Estrutura de Arquivos

```
apresentacao-web/
├── README.md           # Este arquivo
├── server.js           # Servidor Express
├── slides.js           # Conteúdo dos 17 slides
├── package.json        # Dependências do projeto
└── package-lock.json   # Versões exatas das dependências (gerado automaticamente)
```

---

## 🔧 Solução de Problemas

### Erro: "porta 3000 já está em uso"

Se você receber um erro dizendo que a porta 3000 já está em uso:

1. **Opção 1:** Pare o processo que está usando a porta 3000
2. **Opção 2:** Edite `server.js` e mude a linha `const PORT = 3000;` para outra porta (ex: 3001)

### Erro: "Cannot find module 'express'"

Execute novamente:

```bash
npm install
```

### Navegador não abre automaticamente

Abra manualmente o navegador e acesse: http://localhost:3000

---

## 👥 Equipe

- **Ariel Angelo Guiliane Mendes de Almeida**
- **João Pedro José Santos da Silva Guedes**

**Instituição:** Residência em TI - TJGO  
**Projeto:** Sistema de Recomendação de Animes  
**Data:** Dezembro 2025

---

## 📧 Contato

- ariel.almeida@tjgo.jus.br
- joao.guedes@tjgo.jus.br

---

## 🔗 Links Úteis

- **Repositório GitHub:** https://github.com/sudjoao/ml-residencia-ti
- **Notebook Jupyter:** `NotebookFinal-3.ipynb` (na raiz do repositório)
- **Relatório Final:** `RELATORIO_FINAL.md` (na raiz do repositório)
