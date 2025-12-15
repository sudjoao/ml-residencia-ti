# APRESENTAÇÃO FINAL - SISTEMA DE RECOMENDAÇÃO DE ANIMES
## Roteiro Completo de Apresentação

**Projeto:** Sistema de Recomendação de Animes  
**Residência em TI - TJGO**  
**Duração Total:** 10 minutos  
**Metodologia:** CRISP-DM

---

## INTRODUÇÃO - [Tempo estimado: 1 minuto]

**👤 Apresentador: Ariel**

### Slide 1: Capa e Apresentação da Equipe

**Conteúdo do Slide:**
- **Título:** Sistema de Recomendação de Animes
- **Subtítulo:** Aplicação de Machine Learning com Filtragem Colaborativa
- **Equipe:**
  - Ariel Angelo Guiliane Mendes de Almeida
  - João Pedro José Santos da Silva Guedes
- **Residência em TI - TJGO**
- **Dezembro 2024**

**Recursos Visuais:**
- 🎨 Background com tema de animes (sutil e profissional)
- 🏛️ Logo do TJGO
- 👥 Ícones representando a equipe

**Fala do Apresentador:**
Bom dia a todos! Meu nome é [Nome] e junto com meu colega [Nome do colega], desenvolvemos um Sistema de Recomendação de Animes como projeto final da Residência em TI do TJGO. Nosso objetivo foi aplicar técnicas de Machine Learning para resolver um problema real: como ajudar usuários a descobrir novos conteúdos em um catálogo com mais de 24 mil animes. Utilizamos a metodologia CRISP-DM e alcançamos resultados excepcionais que vou apresentar nos próximos minutos.

---

### Slide 2: Agenda e Contexto

**Conteúdo do Slide:**
- **Agenda:**
  1. 🎯 Problema de Negócio (Ariel)
  2. 📊 Dados e Análise (João Pedro)
  3. 🔧 Preparação e Pipeline (Ariel)
  4. 🤖 Duas Abordagens de Recomendação (João Pedro)
  5. 📈 Comparação e Resultados (João Pedro)
  6. 🚀 Conclusões e Recomendações (Ariel)

- **Metodologia:** CRISP-DM
- **Dataset:** MyAnimeList 2023 (Kaggle)
- **Destaque:** Comparação entre User-Based CF e Item-Based CF

**Recursos Visuais:**
- 📋 Diagrama circular do CRISP-DM
- 🔗 Logo do Kaggle e MyAnimeList
- ⚖️ Ícone de comparação/balança

**Fala do Apresentador:**
Nossa apresentação seguirá as seis fases da metodologia CRISP-DM, que é o padrão da indústria para projetos de Data Mining. Um diferencial do nosso projeto é que implementamos e comparamos DUAS abordagens de filtragem colaborativa: User-Based e Item-Based. Vamos começar entendendo o problema de negócio, passar pela análise e preparação dos dados, apresentar ambas as abordagens, comparar os resultados obtidos e finalizar com recomendações práticas. Utilizamos o dataset público do MyAnimeList disponível no Kaggle, que contém mais de 24 milhões de avaliações de usuários.

---

## 1. ENTENDIMENTO DO NEGÓCIO - [Tempo estimado: 1 minuto]

**👤 Apresentador: Ariel**

### Slide 3: O Problema

**Conteúdo do Slide:**
- **Desafio:** Como recomendar animes relevantes em um catálogo de 24.905 títulos?

- **Problemas Identificados:**
  - 📊 Catálogo muito extenso
  - 🔍 Dificuldade de descoberta de novos conteúdos
  - 📉 Baixo engajamento dos usuários
  - 💰 Impacto na retenção e satisfação

- **Solução:** Sistema de Recomendação Inteligente

**Recursos Visuais:**
- 📊 Gráfico mostrando crescimento do catálogo de animes ao longo dos anos
- 🎯 Ícone de usuário perdido em meio a muitas opções

**Fala do Apresentador:**
O problema que nos propusemos a resolver é muito comum em plataformas de streaming: como ajudar usuários a encontrar conteúdo relevante quando há milhares de opções disponíveis? No caso dos animes, temos mais de 24 mil títulos no dataset. Usuários gastam muito tempo procurando o que assistir, muitos acabam desistindo, e isso impacta diretamente o engajamento e a satisfação. Nossa solução foi desenvolver um sistema de recomendação inteligente que aprende com os padrões de comportamento dos usuários.

---

### Slide 4: Objetivos e Métricas de Sucesso

**Conteúdo do Slide:**
- **Objetivos:**
  1. ✅ Personalizar recomendações por usuário
  2. ✅ Comparar duas abordagens de filtragem colaborativa
  3. ✅ Reduzir tempo de busca e aumentar satisfação
  4. ✅ Identificar trade-offs entre acurácia e performance

- **Metas de Sucesso:**
  - MAE (Mean Absolute Error) < 1.5
  - RMSE (Root Mean Squared Error) < 2.0
  - Cobertura > 1.000 usuários
  - Tempo de predição < 5ms por rating

**Recursos Visuais:**
- 🎯 Ícones para cada objetivo
- 📊 Tabela de métricas com metas definidas
- ⚖️ Ícone de balança para comparação

**Fala do Apresentador:**
Definimos quatro objetivos principais: personalizar as recomendações baseadas no histórico de cada usuário, comparar duas abordagens diferentes de filtragem colaborativa para identificar qual funciona melhor, reduzir o tempo de busca e aumentar a satisfação, e entender os trade-offs entre acurácia e performance. Para medir o sucesso, estabelecemos metas quantitativas: erro médio absoluto menor que 1.5, erro quadrático médio menor que 2.0, capacidade de atender pelo menos mil usuários, e tempo de predição menor que 5 milissegundos. Spoiler: AMBAS as abordagens superaram todas essas metas!

---

## 2. ENTENDIMENTO DOS DADOS - [Tempo estimado: 1.5 minutos]

**👤 Apresentador: João Pedro**

### Slide 5: Dataset e Estrutura

**Conteúdo do Slide:**
- **Fonte:** MyAnimeList Dataset 2023 (Kaggle)

- **Dados de Animes:**
  - 24.905 animes
  - 24 atributos (nome, gênero, score, estúdio, etc.)

- **Dados de Usuários:**
  - Milhões de avaliações
  - Escala: 1 a 10
  - 5 atributos (user_id, anime_id, rating, etc.)

**Recursos Visuais:**
- 📊 Tabela mostrando exemplo de dados de animes
- 📊 Tabela mostrando exemplo de avaliações de usuários
- 📈 Números destacados: 24.905 animes, milhões de ratings

**Fala do Apresentador:**
Trabalhamos com o MyAnimeList Dataset 2023, disponível no Kaggle. Ele contém dois conjuntos principais: dados dos animes, com quase 25 mil títulos e 24 atributos como nome, gênero, score médio e estúdio; e dados de usuários, com milhões de avaliações em uma escala de 1 a 10. Esse volume de dados nos permitiu treinar um modelo robusto e fazer recomendações precisas.

---

### Slide 6: Análise Exploratória - Principais Insights

**Conteúdo do Slide:**
- **Insights Descobertos:**

1. **Esparsidade:** Densidade < 1%
   - Maioria dos usuários avalia poucos animes

2. **Distribuição de Ratings:** Viés positivo
   - Ratings mais comuns: 7, 8, 9, 10

3. **Popularidade:** Distribuição long tail
   - Poucos animes concentram maioria das avaliações

4. **Desafio:** Cold Start Problem

**Recursos Visuais:**
- 📊 Histograma da distribuição de ratings (mostrando viés para valores altos)
- 📈 Gráfico de cauda longa da popularidade dos animes
- 🔥 Heatmap mostrando esparsidade da matriz usuário-item

**Fala do Apresentador:**
Durante a análise exploratória, identificamos quatro insights importantes. Primeiro, a matriz de dados é extremamente esparsa - menos de 1% das células têm valores, pois a maioria dos usuários avalia poucos animes. Segundo, há um viés positivo nas avaliações: as pessoas tendem a avaliar melhor os animes que escolhem assistir, com notas 7, 8, 9 e 10 sendo as mais comuns. Terceiro, observamos uma distribuição de cauda longa na popularidade: poucos animes como One Piece, Naruto e Attack on Titan concentram a maioria das avaliações. E quarto, identificamos o desafio do Cold Start - dificuldade em recomendar para usuários ou animes novos sem histórico. Esses insights guiaram nossas decisões na preparação dos dados.

---

## 3. PREPARAÇÃO DOS DADOS - [Tempo estimado: 1.5 minutos]

**👤 Apresentador: Ariel**

### Slide 7: Pipeline de Pré-processamento

**Conteúdo do Slide:**
- **Abordagem:** Pipelines Scikit-learn

- **5 Transformadores Customizados:**
  1. 🔢 **UserAnimeIndexMapper** - Mapeia IDs para índices
  2. 📊 **SparseMatrixCreator** - Cria matriz esparsa CSR
  3. 👥 **TopUserSelector** - Seleciona 5.000 usuários mais ativos
  4. ⚖️ **RatingCentralizer** - Centraliza ratings por usuário
  5. 🔗 **SimilarityMatrixCalculator** - Calcula similaridade de cosseno

- **Benefícios:** Reprodutibilidade, Modularidade, Manutenibilidade

**Recursos Visuais:**
- 🔄 Diagrama de fluxo mostrando o pipeline completo
- 📦 Ícones para cada transformador
- ✅ Checkmarks destacando os benefícios

**Fala do Apresentador:**
Para preparar os dados, desenvolvemos um pipeline completo usando Scikit-learn, que é uma biblioteca padrão de Machine Learning em Python. Criamos cinco transformadores customizados, cada um com uma responsabilidade específica. O primeiro mapeia os IDs de usuários e animes para índices numéricos. O segundo cria uma matriz esparsa no formato CSR, que é muito eficiente em termos de memória. O terceiro seleciona os 5 mil usuários mais ativos - essa amostragem foi necessária para viabilizar o processamento em tempo razoável. O quarto centraliza os ratings pela média de cada usuário, removendo vieses individuais. E o quinto calcula a matriz de similaridade usando cosseno. Essa abordagem de pipeline nos dá reprodutibilidade, modularidade e facilita a manutenção do código.

---

### Slide 8: Decisões Técnicas Importantes

**Conteúdo do Slide:**
- **Por que 5.000 usuários?**
  - ✅ Balanceamento qualidade vs. performance
  - ✅ Tempo de processamento: ~2 minutos
  - ✅ Usuários mais ativos = mais dados confiáveis

- **Por que centralização de ratings?**
  - ✅ Remove viés individual (alguns avaliam sempre alto/baixo)
  - ✅ Foca em preferências relativas

- **Por que matriz esparsa?**
  - ✅ Economia de memória (densidade < 1%)
  - ✅ Operações otimizadas

**Recursos Visuais:**
- ⚖️ Gráfico de balança mostrando trade-off qualidade vs. performance
- 📊 Comparação de uso de memória: matriz densa vs. esparsa
- 🎯 Exemplo visual de centralização de ratings

**Fala do Apresentador:**
Três decisões técnicas foram fundamentais. Primeiro, por que apenas 5 mil usuários? Fizemos um balanceamento entre qualidade e performance. Com 5 mil usuários mais ativos, conseguimos processar tudo em cerca de 2 minutos e ainda ter dados suficientes para recomendações precisas. Segundo, por que centralizar os ratings? Porque cada pessoa tem um viés individual - alguns avaliam sempre alto, outros sempre baixo. Ao centralizar, focamos nas preferências relativas de cada usuário, não nos valores absolutos. E terceiro, por que usar matriz esparsa? Porque com densidade menor que 1%, uma matriz densa desperdiçaria 99% da memória armazenando zeros. A matriz esparsa nos dá economia de memória e operações otimizadas.

---

## 4. MODELAGEM - [Tempo estimado: 2 minutos]

**👤 Apresentador: João Pedro**

### Slide 9: Algoritmo Escolhido

**Conteúdo do Slide:**
- **Algoritmo:** Filtragem Colaborativa Usuário-Usuário

- **Por que essa escolha?**
  1. ✅ **Interpretabilidade** - Fácil explicar recomendações
  2. ✅ **Eficácia comprovada** - Amplamente usado na indústria
  3. ✅ **Adequação** - Dataset rico em avaliações de usuários
  4. ✅ **Implementação viável** - Não requer infraestrutura complexa

- **Princípio:** "Usuários similares gostam de animes similares"

**Recursos Visuais:**
- 👥 Diagrama mostrando usuários similares conectados
- 🎬 Exemplo visual: Usuário A e B gostam dos mesmos animes → recomendar para A o que B gostou
- ⭐ Ícone de estrelas representando ratings

**Fala do Apresentador:**
Escolhemos o algoritmo de Filtragem Colaborativa baseada em usuários. Esse algoritmo funciona com um princípio simples: se dois usuários avaliaram vários animes de forma similar, provavelmente eles têm gostos parecidos. Então, podemos recomendar para um usuário os animes que usuários similares gostaram. Escolhemos essa abordagem por quatro razões: primeiro, é muito interpretável - conseguimos explicar facilmente por que algo foi recomendado. Segundo, é uma técnica comprovada, usada por empresas como Netflix e Amazon. Terceiro, nosso dataset é perfeito para isso, com milhões de avaliações. E quarto, a implementação é viável sem precisar de infraestrutura complexa ou GPUs.

---

### Slide 10: Como o Algoritmo Funciona

**Conteúdo do Slide:**
- **4 Passos do Algoritmo:**

**1. Cálculo de Similaridade**
- Similaridade de Cosseno entre todos os usuários
- Valores: -1 (opostos) a +1 (idênticos)

**2. Identificação de Vizinhos**
- Seleciona top-50 usuários mais similares
- Filtra quem avaliou o anime alvo

**3. Predição de Rating**
- Fórmula ponderada pela similaridade
- Ajusta pela média do usuário

**4. Geração de Recomendações**
- Prediz ratings para animes não assistidos
- Ordena e retorna top-10

**Recursos Visuais:**
- 🔢 Diagrama de fluxo mostrando os 4 passos
- 📐 Fórmula matemática da predição (simplificada)
- 🎯 Exemplo numérico com usuário real

**Fala do Apresentador:**
O algoritmo funciona em quatro passos. Primeiro, calculamos a similaridade de cosseno entre todos os pares de usuários - isso nos dá uma matriz que indica o quão parecidos são os gostos de cada dupla. Segundo, para fazer uma recomendação, identificamos os 50 usuários mais similares ao usuário alvo que também avaliaram o anime em questão. Terceiro, fazemos a predição do rating usando uma média ponderada: quanto mais similar o vizinho, mais peso sua avaliação tem. Ajustamos também pela média histórica do usuário. E quarto, aplicamos esse processo para todos os animes que o usuário ainda não assistiu, ordenamos por rating predito, e retornamos os top 10. Simples, mas muito eficaz!

---

### Slide 11: Exemplo Real de Recomendação

**Conteúdo do Slide:**
- **Usuário de Teste:** ID 48
  - Total de avaliações: 556
  - Rating médio: 6.28
  - Favoritos: Dennou Coil (10), Fullmetal Alchemist (9)

- **Top 5 Recomendações:**

| # | Anime | Rating Predito | Gênero |
|---|-------|----------------|--------|
| 1 | Ketsuinu | 10.00 | Comedy |
| 2 | Ashita no Eleven-tachi | 10.00 | Sports |
| 3 | Jakusansei Million Arthur | 9.72 | Fantasy |
| 4 | Arifureta Itsuka | 9.69 | Fantasy |
| 5 | Tsushima Maru | 9.60 | Drama |

**Recursos Visuais:**
- 👤 Card do perfil do usuário com seus animes favoritos
- 📊 Tabela destacada com as recomendações
- 🎨 Imagens pequenas dos animes recomendados (se possível)

**Fala do Apresentador:**
Vamos ver um exemplo real da primeira abordagem, User-Based CF. Pegamos o usuário de ID 48, que tem 556 avaliações e uma média de 6.28. Entre seus favoritos estão Dennou Coil com nota 10 e Fullmetal Alchemist com nota 9. Nosso sistema gerou essas cinco recomendações, todas com ratings preditos muito altos, entre 9.6 e 10. Reparem na diversidade: temos comédia, esportes, fantasia e drama. Isso mostra que o sistema não fica preso a um único gênero, mas captura a variedade de gostos do usuário. Essas predições foram feitas analisando os padrões dos 50 usuários mais similares a ele.

---

### Slide 12: Segunda Abordagem - Item-Based CF

**Conteúdo do Slide:**
- **Algoritmo:** Filtragem Colaborativa Item-Item (Anime-Anime)

- **Diferença Fundamental:**
  - **User-Based:** Similaridade entre USUÁRIOS
  - **Item-Based:** Similaridade entre ANIMES

- **Princípio:** "Animes similares agradam os mesmos usuários"

- **Vantagens:**
  - ⚡ **5x mais rápido** nas predições (0.43ms vs 2.16ms)
  - 🚀 **87% mais rápido** no treinamento (7.65s vs 120s)
  - 📈 **Melhor escalabilidade** (matriz item-item mais estável)
  - 🎯 **Recomendações consistentes** com preferências estabelecidas

**Recursos Visuais:**
- 🎬 Diagrama mostrando animes similares conectados
- ⚖️ Comparação visual: User-Based vs Item-Based
- ⚡ Gráfico de barras comparando tempos de execução

**Fala do Apresentador:**
Para enriquecer nossa análise, implementamos uma SEGUNDA abordagem: Item-Based Collaborative Filtering. A diferença fundamental é que ao invés de calcular similaridade entre usuários, calculamos similaridade entre animes. O princípio é: se dois animes foram avaliados de forma similar por muitos usuários, eles são similares. Então, se você gostou do anime X, recomendamos animes similares a X. Essa abordagem trouxe vantagens significativas: é 5 vezes mais rápida nas predições, 87% mais rápida no treinamento, escala melhor porque a matriz de animes é mais estável que a de usuários, e gera recomendações mais consistentes com as preferências já estabelecidas do usuário.

---

### Slide 13: Exemplo Real - Item-Based CF

**Conteúdo do Slide:**
- **Mesmo Usuário de Teste:** ID 48 (para comparação direta)

- **Top 5 Recomendações (Item-Based):**

| # | Anime | Rating Predito | Score MAL | Gênero |
|---|-------|----------------|-----------|--------|
| 1 | Kara no Kyoukai 1 | 7.88 | 7.82 | Action, Mystery |
| 2 | Fate/stay night | 7.85 | 7.32 | Action, Fantasy |
| 3 | Ghost in the Shell | 7.80 | 8.04 | Sci-Fi, Mecha |
| 4 | Ergo Proxy | 7.78 | 7.93 | Mystery, Sci-Fi |
| 5 | Serial Experiments Lain | 7.73 | 8.01 | Sci-Fi, Mystery |

- **Observações:**
  - ✅ Ratings preditos mais conservadores (7.7-7.9 vs 9.6-10.0)
  - ✅ Animes com scores MAL mais altos (7.3-8.0)
  - ✅ Maior consistência de gêneros (Action, Sci-Fi, Mystery)

**Recursos Visuais:**
- 📊 Tabela destacada com as recomendações Item-Based
- 🎨 Imagens pequenas dos animes recomendados
- ⚖️ Comparação lado a lado com User-Based

**Fala do Apresentador:**
Agora vamos ver as recomendações da abordagem Item-Based para o MESMO usuário. Reparem nas diferenças: os ratings preditos são mais conservadores, entre 7.7 e 7.9, ao invés de 9 a 10. Os animes recomendados têm scores MAL mais altos, indicando que são títulos mais estabelecidos e bem avaliados pela comunidade. E há maior consistência de gêneros - predominam Action, Sci-Fi e Mystery, que são gêneros que o usuário já demonstrou gostar. Enquanto User-Based trouxe mais diversidade e descoberta, Item-Based trouxe mais segurança e alinhamento com preferências conhecidas. Ambas as abordagens são válidas, mas para propósitos diferentes!

---

## 5. AVALIAÇÃO E COMPARAÇÃO - [Tempo estimado: 2.5 minutos]

**👤 Apresentador: João Pedro**

### Slide 14: Metodologia de Validação

**Conteúdo do Slide:**
- **Abordagem:** Validação com amostra aleatória (mesma para ambas as abordagens)

- **Configuração:**
  - 📊 Amostra: 50.000 ratings
  - 👥 Origem: 5.000 usuários da amostra
  - 🎲 Seed: 42 (reprodutibilidade)
  - 📏 Método: Comparação real vs. predito
  - ⚖️ Objetivo: Comparação justa entre User-Based e Item-Based

- **Métricas Avaliadas:**
  - MAE (Mean Absolute Error) - Acurácia
  - RMSE (Root Mean Squared Error) - Acurácia
  - Tempo de Treinamento - Performance
  - Tempo de Predição - Performance

**Recursos Visuais:**
- 📊 Diagrama mostrando divisão treino/teste
- 🔬 Ícone de microscópio representando validação rigorosa
- ⚖️ Balança representando comparação justa

**Fala do Apresentador:**
Para validar AMBAS as abordagens de forma justa, usamos exatamente a mesma metodologia. Separamos aleatoriamente 50 mil avaliações dos nossos 5 mil usuários e comparamos os ratings reais com os ratings preditos por cada modelo. Usamos seed 42 para garantir reprodutibilidade. Avaliamos quatro métricas: MAE e RMSE para medir acurácia, e tempo de treinamento e predição para medir performance. Agora vamos aos resultados comparativos!

---

### Slide 15: Comparação de Acurácia 🎯

**Conteúdo do Slide:**
- **RESULTADOS DE ACURÁCIA:**

| Métrica | Meta | User-Based | Item-Based | Melhor |
|---------|------|------------|------------|--------|
| **MAE** | < 1.5 | **0.7682** | **0.8689** | User-Based (13% melhor) |
| **RMSE** | < 2.0 | **1.0210** | **1.1599** | User-Based (14% melhor) |
| **Status** | - | ✅ **49% melhor** | ✅ **42% melhor** | Ambas superam! |

- **Interpretação:**
  - ✅ **User-Based:** Erro médio de 0.77 pontos (mais preciso)
  - ✅ **Item-Based:** Erro médio de 0.87 pontos (ainda excelente)
  - ✅ **Diferença pequena:** Apenas 0.10 pontos de diferença
  - ✅ **AMBAS superam as metas significativamente!**

**Recursos Visuais:**
- 📊 Gráfico de barras comparando User-Based vs Item-Based vs Meta
- ✅ Checkmarks verdes para ambas as abordagens
- 🏆 Destaque para User-Based como mais preciso
- 📈 Linha mostrando que ambas superam baseline

**Fala do Apresentador:**
Aqui está a comparação de acurácia! User-Based CF alcançou MAE de 0.7682, enquanto Item-Based ficou em 0.8689 - uma diferença de apenas 13%. Ambas superaram LARGAMENTE as metas: User-Based foi 49% melhor que a meta, Item-Based foi 42% melhor. Na prática, isso significa que User-Based erra em média 0.77 pontos, e Item-Based erra 0.87 pontos. A diferença é pequena - apenas 0.10 pontos! Então, em termos de acurácia, User-Based leva uma pequena vantagem, mas AMBAS são excelentes. Agora vamos ver a performance...

---

### Slide 16: Comparação de Performance ⚡

**Conteúdo do Slide:**
- **RESULTADOS DE PERFORMANCE:**

| Métrica | User-Based | Item-Based | Vantagem |
|---------|------------|------------|----------|
| **Tempo de Treinamento** | ~120s | **7.65s** | Item-Based **16x mais rápido** |
| **Tempo de Predição (50k)** | 107.79s | **21.63s** | Item-Based **5x mais rápido** |
| **Tempo/Predição** | 2.16 ms | **0.43 ms** | Item-Based **5x mais rápido** |
| **Meta** | < 5ms | ✅ | ✅ | Ambas atendem! |

- **Interpretação:**
  - ⚡ **Item-Based:** Muito mais rápido em tudo
  - ✅ **User-Based:** Ainda atende requisitos de produção
  - 🎯 **Trade-off:** Acurácia vs Performance

**Recursos Visuais:**
- ⚡ Gráfico de barras mostrando diferenças de tempo (destaque para Item-Based)
- 🚀 Ícone de foguete para Item-Based
- ⚖️ Balança mostrando trade-off acurácia vs performance
- ✅ Ambas atendem meta de < 5ms/predição

**Fala do Apresentador:**
Agora a performance! E aqui Item-Based CF brilha! No treinamento, Item-Based leva apenas 7.65 segundos, enquanto User-Based leva 120 segundos - Item-Based é 16 vezes mais rápido! Nas predições, Item-Based processa 50 mil ratings em 21 segundos, User-Based leva 107 segundos - 5 vezes mais rápido! Por predição individual, Item-Based leva 0.43 milissegundos, User-Based 2.16 milissegundos. Mas atenção: AMBAS atendem a meta de menos de 5 milissegundos por predição, então ambas são viáveis para produção. O trade-off fica claro: User-Based é 13% mais preciso, mas Item-Based é 5 vezes mais rápido. Qual escolher? Depende do cenário!

---

### Slide 17: Análise Qualitativa Comparativa

**Conteúdo do Slide:**

**User-Based CF:**
- ✅ **Pontos Fortes:** Maior precisão (13% melhor), maior diversidade, descoberta de conteúdo
- ⚠️ **Limitações:** 5x mais lento, escalabilidade limitada, cold start com usuários novos

**Item-Based CF:**
- ✅ **Pontos Fortes:** 5x mais rápido, melhor escalabilidade, recomendações consistentes
- ⚠️ **Limitações:** 13% menos preciso, menor diversidade, mais conservador

**Limitações Comuns:**
- ⚠️ Cold Start (novos usuários/animes sem histórico)
- ⚠️ Esparsidade dos dados (densidade < 5%)
- ⚠️ Amostra limitada a 5.000 usuários

**Recursos Visuais:**
- ⚖️ Tabela comparativa lado a lado
- 🎯 Ícones verdes para pontos fortes
- ⚠️ Ícones amarelos para limitações
- 📊 Gráfico radar comparando dimensões qualitativas

**Fala do Apresentador:**
Vamos fazer uma análise qualitativa comparativa. User-Based CF tem como pontos fortes a maior precisão - 13% melhor que Item-Based - maior diversidade nas recomendações, e capacidade de descoberta de conteúdo menos conhecido. Mas é 5 vezes mais lento e tem problemas de escalabilidade. Item-Based CF, por outro lado, é 5 vezes mais rápido, escala melhor porque a matriz de animes é mais estável, e gera recomendações mais consistentes com preferências estabelecidas. Mas é 13% menos preciso e mais conservador. Ambas compartilham limitações: cold start com novos usuários ou animes, esparsidade dos dados, e nossa amostra limitada a 5 mil usuários. A escolha entre elas depende do cenário de uso!

---

### Slide 18: Recomendações de Uso 🎯

**Conteúdo do Slide:**

**Cenário 1: Plataforma de Produção**
- 💡 **Recomendação:** Sistema Híbrido (70% Item-Based + 30% User-Based)
- ✅ Combina performance com diversidade

**Cenário 2: Recursos Limitados**
- 💡 **Recomendação:** Item-Based CF exclusivamente
- ✅ 5x mais rápido, apenas 13% de perda em acurácia

**Cenário 3: Máxima Precisão**
- 💡 **Recomendação:** User-Based CF
- ✅ MAE 13% melhor, maior diversidade

**Cenário 4: Perfis Diferentes de Usuários**
- 👶 **Novos (< 10 avaliações):** Item-Based (mais conservador)
- 👤 **Moderados (10-100):** 70% Item + 30% User
- 🌟 **Ativos (100+):** 50% Item + 50% User (máxima diversidade)

**Recursos Visuais:**
- 🎯 Ícones para cada cenário
- 📊 Gráfico de pizza mostrando proporções do híbrido
- 👥 Ícones representando diferentes perfis de usuários
- ✅ Checkmarks destacando recomendações

**Fala do Apresentador:**
Com base em nossa análise, fazemos quatro recomendações práticas. Para uma plataforma de produção real, recomendamos um sistema HÍBRIDO: 70% Item-Based para garantir performance, 30% User-Based para adicionar diversidade. Se houver recursos limitados, use Item-Based exclusivamente - você perde apenas 13% em acurácia mas ganha 5x em velocidade. Se precisar de máxima precisão e tiver recursos, use User-Based. E o mais interessante: adapte a abordagem ao perfil do usuário! Usuários novos com poucas avaliações se beneficiam mais de Item-Based, que é mais conservador. Usuários moderados funcionam bem com o híbrido 70-30. E usuários muito ativos podem receber 50-50 para máxima diversidade. Essa personalização da própria estratégia de recomendação é um insight valioso!

---

## 6. CONCLUSÃO - [Tempo estimado: 1 minuto]

**👤 Apresentador: Ariel**

### Slide 19: Principais Conquistas

**Conteúdo do Slide:**
- **Resumo das Conquistas:**

1. ✅ **Metodologia CRISP-DM** completa (6 fases)
2. ✅ **Duas abordagens implementadas e comparadas:**
   - User-Based CF: MAE 0.7682 (49% melhor que meta)
   - Item-Based CF: MAE 0.8689 (42% melhor que meta)
3. ✅ **Análise comparativa completa:**
   - Acurácia: User-Based 13% melhor
   - Performance: Item-Based 5x mais rápido
4. ✅ **Pipeline reprodutível** (Scikit-learn)
5. ✅ **Recomendações práticas** para diferentes cenários
6. ✅ **Documentação completa** e código aberto
7. ✅ **Aprendizados valiosos** sobre trade-offs em ML

**Recursos Visuais:**
- 🏆 Ícone de troféu grande e destacado
- ✅ Checkmarks verdes para cada conquista
- 📊 Recap visual dos números principais (ambas abordagens)
- ⚖️ Ícone de balança mostrando comparação
- 🎯 Gráfico de radar mostrando completude do projeto

**Fala do Apresentador:**
Para concluir, vamos recapitular nossas principais conquistas. Primeiro, seguimos rigorosamente a metodologia CRISP-DM, passando por todas as seis fases. Segundo, e este é um diferencial importante, implementamos e comparamos DUAS abordagens de filtragem colaborativa: User-Based com MAE de 0.7682, superando a meta em 49%, e Item-Based com MAE de 0.8689, superando em 42%. Terceiro, fizemos uma análise comparativa completa que revelou insights valiosos: User-Based é 13% mais preciso, mas Item-Based é 5 vezes mais rápido. Quarto, criamos pipelines reprodutíveis usando as melhores práticas. Quinto, fornecemos recomendações práticas para diferentes cenários de uso, incluindo um sistema híbrido. Sexto, documentamos tudo completamente e disponibilizamos o código aberto no GitHub. E sétimo, adquirimos aprendizados profundos sobre trade-offs em Machine Learning - não existe solução universalmente melhor, tudo depende do contexto!

---

### Slide 20: Agradecimentos e Contatos

**Conteúdo do Slide:**
- **Agradecimentos:**
  - 🙏 TJGO - Residência em TI
  - 👨‍🏫 Professores e orientadores
  - 👥 Colegas da residência
  - 🌐 Comunidade Kaggle (dataset)

- **Repositório GitHub:**
  - 📂 github.com/sudjoao/ml-residencia-ti
  - ✅ Código completo
  - ✅ Notebook Jupyter
  - ✅ Documentação
  - ✅ Apresentação web interativa

- **Contatos:**
  - 📧 Ariel Angelo Guiliane Mendes de Almeida
  - 📧 João Pedro José Santos da Silva Guedes

- **Perguntas?** 🙋‍♂️

**Recursos Visuais:**
- 🏛️ Logo do TJGO
- 🐙 Logo do GitHub
- 📊 QR Code para o repositório
- 🎨 Background profissional e agradável
- 👥 Fotos da equipe (opcional)

**Fala do Apresentador:**
Para finalizar, gostaríamos de agradecer ao TJGO pela oportunidade da Residência em TI, aos nossos professores e orientadores pelo suporte, aos colegas da residência pelas discussões enriquecedoras, e à comunidade Kaggle por disponibilizar o dataset. Todo o código do projeto está disponível no GitHub no repositório ml-residencia-ti, incluindo o notebook Jupyter completo, toda a documentação, e até uma apresentação web interativa que desenvolvemos. Estamos à disposição para perguntas! Muito obrigado!

---

## APÊNDICE: DICAS PARA A APRESENTAÇÃO

### Gestão do Tempo (10 minutos total)

- **Introdução:** 1 min (Slides 1-2) - **Ariel**
- **Business Understanding:** 1 min (Slides 3-4) - **Ariel**
- **Data Understanding:** 1 min (Slides 5-6) - **João Pedro**
- **Data Preparation:** 1 min (Slides 7-8) - **Ariel**
- **Modeling:** 2 min (Slides 9-13) - **João Pedro** [Inclui ambas abordagens]
- **Evaluation & Comparison:** 2.5 min (Slides 14-18) - **João Pedro** [Comparação detalhada]
- **Conclusão:** 1.5 min (Slides 19-20) - **Ariel**

**Total:** 10 minutos | **Slides:** 20 (vs 17 anteriores)

### Distribuição de Responsabilidades

**Ariel apresenta:**
- Introdução (1 min) - Slides 1-2
- Business Understanding (1 min) - Slides 3-4
- Data Preparation (1 min) - Slides 7-8
- Conclusão (1.5 min) - Slides 19-20
- **Total: 4.5 minutos**

**João Pedro apresenta:**
- Data Understanding (1 min) - Slides 5-6
- Modeling - Duas Abordagens (2 min) - Slides 9-13
- Evaluation & Comparison (2.5 min) - Slides 14-18
- **Total: 5.5 minutos**

### Dicas de Apresentação

**Antes da Apresentação:**
- ✅ Ensaiar pelo menos 3 vezes cronometrando
- ✅ Testar todos os recursos visuais e links
- ✅ Preparar backup dos slides (PDF + online)
- ✅ Ter o notebook aberto para demonstração (se houver tempo)

**Durante a Apresentação:**
- 🎤 Falar com clareza e entusiasmo
- 👁️ Manter contato visual com a audiência
- 🖱️ Usar apontador laser ou cursor para destacar informações
- ⏱️ Monitorar o tempo discretamente
- 💬 Pausar para respirar entre slides

**Linguagem Corporal:**
- ✅ Postura ereta e confiante
- ✅ Gestos naturais para enfatizar pontos
- ✅ Movimentar-se levemente (não ficar estático)
- ✅ Sorrir e demonstrar paixão pelo projeto

**Respondendo Perguntas:**
- 👂 Ouvir atentamente a pergunta completa
- 🤔 Pausar 2-3 segundos antes de responder
- 💡 Ser honesto se não souber algo
- 🔄 Redirecionar para pontos fortes do projeto quando apropriado

### Possíveis Perguntas e Respostas Sugeridas

**P: Por que implementaram duas abordagens ao invés de uma?**
R: Excelente pergunta! Implementar duas abordagens nos permitiu fazer uma análise comparativa rica e entender os trade-offs entre acurácia e performance. Descobrimos que User-Based é 13% mais preciso, mas Item-Based é 5x mais rápido. Isso nos deu insights valiosos para recomendar a solução certa para cada cenário. Em projetos reais, essa comparação é fundamental!

**P: Qual das duas abordagens vocês recomendam?**
R: Depende do cenário! Para produção com muitos usuários, recomendamos um sistema híbrido: 70% Item-Based para garantir performance, 30% User-Based para adicionar diversidade. Se houver recursos limitados, Item-Based exclusivamente. Se precisar de máxima precisão, User-Based. E o mais interessante: podemos adaptar a estratégia ao perfil do usuário - novos usuários recebem Item-Based (mais conservador), usuários ativos recebem híbrido 50-50 (máxima diversidade).

**P: Por que não usaram Deep Learning?**
R: Optamos por Filtragem Colaborativa por três razões: primeiro, é mais interpretável e conseguimos explicar as recomendações; segundo, nosso dataset é perfeito para essa abordagem; e terceiro, queríamos focar em implementação sólida, comparação rigorosa e validação. Deep Learning está no nosso roadmap futuro!

**P: Como lidam com o Cold Start?**
R: Excelente pergunta! Atualmente, para usuários novos, nossa recomendação é usar Item-Based CF, que é mais conservador e recomenda animes bem estabelecidos. Para usuários sem nenhum histórico, retornamos animes populares. Reconhecemos que é uma limitação. Nossa solução futura é implementar um sistema híbrido que use metadados dos animes (gêneros, estúdio, sinopse) para fazer recomendações iniciais.

**P: O sistema escala para milhões de usuários?**
R: Com User-Based CF, não - estamos limitados a 5 mil usuários. Mas Item-Based CF escala MUITO melhor! A matriz item-item é mais estável (número de animes cresce mais devagar que usuários), e é 16x mais rápida no treinamento. Para escalar ainda mais, precisaríamos de otimizações como processamento distribuído com Spark, cache de recomendações com Redis, e possivelmente Matrix Factorization.

**P: Quanto tempo leva para gerar uma recomendação?**
R: Depende da abordagem! User-Based leva 2.16 milissegundos por predição, Item-Based leva 0.43 milissegundos - 5 vezes mais rápido! Ambas atendem a meta de menos de 5ms. O pré-processamento (calcular matriz de similaridade) é feito uma vez: User-Based leva ~120 segundos, Item-Based apenas 7.65 segundos.

**P: Como validaram que as recomendações são realmente boas?**
R: Usamos validação rigorosa com 50 mil avaliações reais. Comparamos ratings preditos vs reais usando MAE e RMSE. Ambas as abordagens superaram as metas: User-Based MAE 0.77 (49% melhor), Item-Based MAE 0.87 (42% melhor). Qualitativamente, analisamos exemplos reais e verificamos se fazem sentido. Também comparamos com baseline (sempre prever a média) - ambas foram 40-50% melhores!

---

## CHECKLIST FINAL PRÉ-APRESENTAÇÃO

### Slides
- [ ] Todos os 20 slides criados (vs 17 anteriores)
- [ ] Recursos visuais preparados (gráficos, diagramas, tabelas comparativas)
- [ ] Gráficos de comparação User-Based vs Item-Based
- [ ] Tabelas de métricas com ambas abordagens
- [ ] Transições suaves configuradas
- [ ] Fontes legíveis (mínimo 24pt para texto)
- [ ] Cores contrastantes e profissionais
- [ ] Logo do TJGO em todos os slides
- [ ] Numeração de slides
- [ ] Backup em PDF e online

### Conteúdo
- [ ] Números conferidos - User-Based: MAE 0.7682, RMSE 1.0210
- [ ] Números conferidos - Item-Based: MAE 0.8689, RMSE 1.1599
- [ ] Tempos de performance verificados (5x, 16x)
- [ ] Links funcionando (GitHub, Overleaf)
- [ ] QR Codes testados
- [ ] Exemplos verificados (Usuário ID 48 em ambas abordagens)
- [ ] Referências corretas

### Apresentador
- [ ] Ensaio completo realizado (3x mínimo)
- [ ] Tempo controlado (máximo 10 minutos)
- [ ] Fala naturalizada (não decorada roboticamente)
- [ ] Respostas para perguntas comuns preparadas
- [ ] Roupa profissional separada
- [ ] Água disponível

### Técnico
- [ ] Notebook carregado e testado
- [ ] Projetor/tela testados
- [ ] Controle remoto/clicker funcionando
- [ ] Backup dos slides em pen drive
- [ ] Internet funcionando (para links)
- [ ] Plano B se tecnologia falhar

---

**BOA SORTE NA APRESENTAÇÃO! 🚀🎯🏆**


