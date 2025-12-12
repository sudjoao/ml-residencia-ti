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
  4. 🤖 Modelo de Recomendação (João Pedro)
  5. 📈 Resultados e Avaliação (João Pedro)
  6. 🚀 Conclusões (Ariel)

- **Metodologia:** CRISP-DM
- **Dataset:** MyAnimeList 2023 (Kaggle)

**Recursos Visuais:**
- 📋 Diagrama circular do CRISP-DM
- 🔗 Logo do Kaggle e MyAnimeList

**Fala do Apresentador:**
Nossa apresentação seguirá as seis fases da metodologia CRISP-DM, que é o padrão da indústria para projetos de Data Mining. Vamos começar entendendo o problema de negócio, passar pela análise e preparação dos dados, apresentar nosso modelo de recomendação, mostrar os resultados obtidos e finalizar com as conclusões. Utilizamos o dataset público do MyAnimeList disponível no Kaggle, que contém milhões de avaliações de usuários.

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
  2. ✅ Reduzir tempo de busca
  3. ✅ Aumentar satisfação e engajamento
  4. ✅ Utilizar padrões colaborativos

- **Metas de Sucesso:**
  - MAE (Mean Absolute Error) < 1.5
  - RMSE (Root Mean Squared Error) < 2.0
  - Cobertura > 1.000 usuários

**Recursos Visuais:**
- 🎯 Ícones para cada objetivo
- 📊 Tabela de métricas com metas definidas

**Fala do Apresentador:**
Definimos quatro objetivos principais: personalizar as recomendações baseadas no histórico de cada usuário, reduzir o tempo que eles gastam procurando, aumentar a satisfação geral, e fazer isso utilizando padrões colaborativos - ou seja, identificando usuários com gostos similares. Para medir o sucesso, estabelecemos metas quantitativas: erro médio absoluto menor que 1.5, erro quadrático médio menor que 2.0, e capacidade de atender pelo menos mil usuários. Spoiler: superamos todas essas metas!

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
Vamos ver um exemplo real. Pegamos o usuário de ID 48, que tem 556 avaliações e uma média de 6.28. Entre seus favoritos estão Dennou Coil com nota 10 e Fullmetal Alchemist com nota 9. Nosso sistema gerou essas cinco recomendações, todas com ratings preditos muito altos, entre 9.6 e 10. Reparem na diversidade: temos comédia, esportes, fantasia e drama. Isso mostra que o sistema não fica preso a um único gênero, mas captura a variedade de gostos do usuário. Essas predições foram feitas analisando os padrões dos 50 usuários mais similares a ele.

---

## 5. AVALIAÇÃO - [Tempo estimado: 2 minutos]

**👤 Apresentador: João Pedro**

### Slide 12: Metodologia de Validação

**Conteúdo do Slide:**
- **Abordagem:** Validação com amostra aleatória

- **Configuração:**
  - 📊 Amostra: 50.000 ratings
  - 👥 Origem: 5.000 usuários da amostra
  - 🎲 Seed: 42 (reprodutibilidade)
  - 📏 Método: Comparação real vs. predito

- **Métricas Avaliadas:**
  - MAE (Mean Absolute Error)
  - RMSE (Root Mean Squared Error)

**Recursos Visuais:**
- 📊 Diagrama mostrando divisão treino/teste
- 🔬 Ícone de microscópio representando validação rigorosa
- 📈 Gráfico conceitual de predição vs. real

**Fala do Apresentador:**
Para validar nosso modelo, usamos uma abordagem rigorosa. Separamos aleatoriamente 50 mil avaliações dos nossos 5 mil usuários e comparamos os ratings reais com os ratings preditos pelo modelo. Usamos seed 42 para garantir reprodutibilidade - qualquer pessoa pode executar o código e obter os mesmos resultados. Avaliamos duas métricas principais: MAE, que é o erro médio absoluto, e RMSE, que é a raiz do erro quadrático médio e penaliza mais os erros grandes. Agora vamos aos resultados!

---

### Slide 13: Resultados - Métricas Alcançadas 🎯

**Conteúdo do Slide:**
- **RESULTADOS OBTIDOS:**

| Métrica | Meta | Resultado | Status |
|---------|------|-----------|--------|
| **MAE** | < 1.5 | **0.7682** | ✅ **49% melhor!** |
| **RMSE** | < 2.0 | **1.0210** | ✅ **49% melhor!** |
| **Cobertura** | > 1.000 | **5.000** | ✅ **5x maior!** |

- **Interpretação:**
  - ✅ Erro médio de apenas **0.77 pontos** (escala 1-10)
  - ✅ Predições **altamente confiáveis**
  - ✅ **Superamos todas as metas!**

**Recursos Visuais:**
- 🎯 Gráfico de barras comparando Meta vs. Resultado
- ✅ Checkmarks verdes grandes e destacados
- 🏆 Ícone de troféu ou medalha
- 📊 Destaque visual para os números principais (0.7682 e 1.0210)

**Fala do Apresentador:**
E aqui estão nossos resultados! Conseguimos um MAE de 0.7682, quando nossa meta era menor que 1.5 - isso significa que superamos a meta em 49%! O RMSE foi 1.0210, também 49% melhor que a meta de 2.0. E conseguimos processar 5 mil usuários, cinco vezes mais que o mínimo de mil que estabelecemos. Mas o que isso significa na prática? Significa que, em média, nossas predições erram por apenas 0.77 pontos em uma escala de 1 a 10. Se o sistema prevê que você vai dar nota 8 para um anime, provavelmente você vai dar entre 7.2 e 8.8. Isso é uma precisão excelente! Esses resultados demonstram que nosso sistema é capaz de fazer recomendações altamente confiáveis.

---

### Slide 14: Análise Qualitativa

**Conteúdo do Slide:**
- **Pontos Fortes:**
  - ✅ Alta precisão (MAE e RMSE baixos)
  - ✅ Diversidade nas recomendações
  - ✅ Personalização efetiva
  - ✅ Explicabilidade ("usuários similares gostaram")

- **Limitações Identificadas:**
  - ⚠️ Cold Start (usuários/animes novos)
  - ⚠️ Esparsidade em alguns casos
  - ⚠️ Viés de popularidade
  - ⚠️ Amostra limitada a 5.000 usuários

- **Transparência:** Reconhecemos e documentamos as limitações

**Recursos Visuais:**
- ⚖️ Balança mostrando pontos fortes vs. limitações
- 🎯 Ícones verdes para pontos fortes
- ⚠️ Ícones amarelos para limitações
- 📋 Lista visual clara

**Fala do Apresentador:**
É importante fazer uma análise qualitativa honesta. Nossos pontos fortes são claros: alta precisão nas métricas, diversidade nas recomendações, personalização efetiva para cada usuário, e explicabilidade - conseguimos dizer "recomendamos isso porque usuários com gostos similares aos seus gostaram". Mas também identificamos limitações. Temos o problema de Cold Start - dificuldade com usuários ou animes novos sem histórico. A esparsidade dos dados ainda é um desafio em alguns casos. Há um viés de popularidade - tendência a recomendar animes mais conhecidos. E nossa amostra está limitada a 5 mil usuários por questões de performance. Reconhecer essas limitações é fundamental para trabalhos futuros e para a transparência do projeto.

---

## 6. CONCLUSÃO - [Tempo estimado: 1 minuto]

**👤 Apresentador: Ariel**

### Slide 15: Principais Conquistas

**Conteúdo do Slide:**
- **Resumo das Conquistas:**

1. ✅ **Metodologia CRISP-DM** completa (6 fases)
2. ✅ **Resultados excepcionais:**
   - MAE: 0.7682 (49% melhor que meta)
   - RMSE: 1.0210 (49% melhor que meta)
3. ✅ **Pipeline reprodutível** (Scikit-learn)
4. ✅ **Sistema funcional** de recomendação
5. ✅ **Documentação completa** e código aberto
6. ✅ **Aprendizados valiosos** sobre ML aplicado

**Recursos Visuais:**
- 🏆 Ícone de troféu grande e destacado
- ✅ Checkmarks verdes para cada conquista
- 📊 Recap visual dos números principais
- 🎯 Gráfico de radar mostrando completude do projeto

**Fala do Apresentador:**
Para concluir, vamos recapitular nossas principais conquistas. Primeiro, seguimos rigorosamente a metodologia CRISP-DM, passando por todas as seis fases. Segundo, alcançamos resultados excepcionais, superando todas as nossas metas em 49%. Terceiro, criamos um pipeline reprodutível usando as melhores práticas com Scikit-learn. Quarto, entregamos um sistema funcional de recomendação que pode ser usado em cenários reais. Quinto, documentamos tudo de forma completa e disponibilizamos o código aberto no GitHub. E sexto, e talvez mais importante, adquirimos aprendizados valiosos sobre como aplicar Machine Learning a problemas reais, desde o entendimento do negócio até a avaliação de resultados.

---

### Slide 16: Aplicabilidade no Contexto do TJGO

**Conteúdo do Slide:**
- **Adaptações Possíveis para o TJGO:**

1. **📚 Recomendação de Jurisprudências**
   - Usuários → Magistrados/Servidores
   - Animes → Jurisprudências/Acórdãos
   - Benefício: Agilizar pesquisa jurídica

2. **📄 Recomendação de Modelos de Documentos**
   - Usuários → Servidores
   - Animes → Modelos/Templates
   - Benefício: Aumentar produtividade

3. **⚖️ Distribuição Inteligente de Processos**
   - Usuários → Varas/Servidores
   - Animes → Tipos de processos
   - Benefício: Otimizar distribuição por especialização

**Recursos Visuais:**
- 🏛️ Ícone do TJGO
- 🔄 Diagrama mostrando analogia: Animes → Jurisprudências
- 💡 Lâmpada representando ideias de aplicação
- ⚖️ Balança da justiça

**Fala do Apresentador:**
E como isso se aplica ao contexto do TJGO? Identificamos três possibilidades muito interessantes. Primeira: um sistema de recomendação de jurisprudências. Assim como recomendamos animes para usuários, poderíamos recomendar jurisprudências relevantes para magistrados e servidores baseado no histórico de consultas. Isso agilizaria muito a pesquisa jurídica. Segunda: recomendação de modelos de documentos. Servidores que usam certos templates poderiam receber sugestões de outros modelos úteis, aumentando a produtividade. E terceira: distribuição inteligente de processos. Poderíamos usar técnicas similares para distribuir processos considerando a especialização de cada vara ou servidor, otimizando o fluxo de trabalho. As técnicas que aprendemos aqui têm aplicação direta no dia a dia do tribunal!

---

### Slide 17: Agradecimentos e Contatos

**Conteúdo do Slide:**
- **Agradecimentos:**
  - 🙏 TJGO pela oportunidade da Residência em TI
  - 👨‍🏫 Professores e mentores
  - 👥 Colegas de turma
  - 🌐 Comunidade open-source (Kaggle, Scikit-learn)

- **Contatos e Links:**
  - 📁 **GitHub:** github.com/sudjoao/ml-residencia-ti
  - 📝 **Relatório:** [Link Overleaf]
  - 📧 **E-mails:** [emails da equipe]

- **Perguntas?** 💬

**Recursos Visuais:**
- 🙏 Imagem de agradecimento
- 🔗 QR Codes para GitHub e Overleaf
- 👥 Foto da equipe (se disponível)
- 💬 Ícone de perguntas

**Fala do Apresentador:**
Gostaríamos de agradecer ao TJGO pela oportunidade desta Residência em TI, que nos permitiu desenvolver habilidades práticas em Machine Learning. Agradecemos também aos professores e mentores que nos guiaram, aos colegas de turma pelas discussões enriquecedoras, e à comunidade open-source, especialmente o Kaggle pelo dataset e o Scikit-learn pelas ferramentas. Todo o nosso código está disponível no GitHub, o relatório completo está no Overleaf, e estamos à disposição para contato. E agora, ficamos à disposição para perguntas! Muito obrigado pela atenção!

---

## APÊNDICE: DICAS PARA A APRESENTAÇÃO

### Gestão do Tempo (10 minutos total)

- **Introdução:** 1 min (Slides 1-2) - **Ariel**
- **Business Understanding:** 1 min (Slides 3-4) - **Ariel**
- **Data Understanding:** 1.5 min (Slides 5-6) - **João Pedro**
- **Data Preparation:** 1.5 min (Slides 7-8) - **Ariel**
- **Modeling:** 2 min (Slides 9-11) - **João Pedro**
- **Evaluation:** 2 min (Slides 12-14) - **João Pedro**
- **Conclusão:** 1 min (Slides 15-17) - **Ariel**

### Distribuição de Responsabilidades

**Ariel apresenta:**
- Introdução (1 min)
- Business Understanding (1 min)
- Data Preparation (1.5 min)
- Conclusão (1 min)
- **Total: 4.5 minutos**

**João Pedro apresenta:**
- Data Understanding (1.5 min)
- Modeling (2 min)
- Evaluation (2 min)
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

**P: Por que não usaram Deep Learning?**
R: Optamos por Filtragem Colaborativa por três razões: primeiro, é mais interpretável e conseguimos explicar as recomendações; segundo, nosso dataset é perfeito para essa abordagem; e terceiro, queríamos focar em implementação sólida e validação rigorosa. Deep Learning está no nosso roadmap futuro!

**P: Como lidam com o Cold Start?**
R: Excelente pergunta! Atualmente, para usuários novos, retornamos a média geral ou animes populares. Reconhecemos que é uma limitação. Nossa solução futura é implementar um sistema híbrido que use metadados dos animes (gêneros, estúdio, sinopse) para fazer recomendações iniciais.

**P: O sistema escala para milhões de usuários?**
R: Com a implementação atual, não. Estamos limitados a 5 mil usuários por questões de memória e processamento. Para escalar, precisaríamos de otimizações como processamento distribuído com Spark, cache de recomendações com Redis, e possivelmente migrar para Matrix Factorization ou Item-Based CF, que escalam melhor.

**P: Quanto tempo leva para gerar uma recomendação?**
R: Após o pré-processamento (que é feito uma vez), gerar recomendações para um usuário leva menos de 1 segundo. O pré-processamento completo (calcular matriz de similaridade) leva cerca de 2 minutos para 5 mil usuários.

**P: Como validaram que as recomendações são realmente boas?**
R: Usamos duas abordagens: quantitativa e qualitativa. Quantitativamente, testamos com 50 mil avaliações reais e medimos MAE e RMSE. Qualitativamente, analisamos exemplos reais de recomendações e verificamos se fazem sentido dado o perfil do usuário. Também comparamos com baseline (sempre prever a média).

---

## CHECKLIST FINAL PRÉ-APRESENTAÇÃO

### Slides
- [ ] Todos os 19 slides criados
- [ ] Recursos visuais preparados (gráficos, diagramas, tabelas)
- [ ] Transições suaves configuradas
- [ ] Fontes legíveis (mínimo 24pt para texto)
- [ ] Cores contrastantes e profissionais
- [ ] Logo do TJGO em todos os slides
- [ ] Numeração de slides
- [ ] Backup em PDF e online

### Conteúdo
- [ ] Números conferidos (MAE, RMSE, etc.)
- [ ] Links funcionando (GitHub, Overleaf)
- [ ] QR Codes testados
- [ ] Exemplos verificados
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


