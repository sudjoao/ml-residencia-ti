// Conteúdo dos slides da apresentação
const slides = [
    // Slide 1: Capa
    `
    <div class="slide-content center">
        <div style="font-size: 5em; margin-bottom: 20px;">🎬</div>
        <h1>Sistema de Recomendação de Animes</h1>
        <h2 style="color: #764ba2; font-weight: 300;">Aplicação de Machine Learning com Filtragem Colaborativa</h2>
        
        <div class="team">
            <div class="team-member">
                <div class="avatar">👨🏻‍💻</div>
                <h3>Ariel Angelo Guiliane<br>Mendes de Almeida</h3>
            </div>
            <div class="team-member">
                <div class="avatar">👨🏽‍💻</div>
                <h3>João Pedro José Santos<br>da Silva Guedes</h3>
            </div>
        </div>
        
        <p style="font-size: 1.3em; margin-top: 40px; color: #667eea; font-weight: 600;">
            Residência em TI - TJGO<br>
            Dezembro 2025
        </p>
    </div>
    `,
    
    // Slide 2: Agenda
    `
    <div class="slide-content">
        <h1>📋 Agenda e Contexto</h1>
        
        <div class="grid-2">
            <div class="card">
                <h3>📌 Agenda</h3>
                <ol>
                    <li>🎯 Problema de Negócio</li>
                    <li>📊 Dados e Análise</li>
                    <li>🔧 Preparação e Pipeline</li>
                    <li>🤖 Modelo de Recomendação</li>
                    <li>📈 Resultados e Avaliação</li>
                    <li>🚀 Conclusões</li>
                </ol>
            </div>
            
            <div class="card">
                <h3>🔬 Metodologia</h3>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 3em;">🔄</div>
                    <h2 style="color: #667eea; margin: 10px 0;">CRISP-DM</h2>
                    <p style="font-size: 1.1em;">Cross-Industry Standard Process for Data Mining</p>
                </div>
                <h3 style="margin-top: 30px;">📦 Dataset</h3>
                <p style="font-size: 1.1em;">MyAnimeList 2023 (Kaggle)</p>
            </div>
        </div>
    </div>
    `,
    
    // Slide 3: O Problema
    `
    <div class="slide-content">
        <h1>🎯 O Problema</h1>
        
        <div class="center" style="margin: 30px 0;">
            <h2 style="font-size: 2em; color: #667eea;">
                Como recomendar animes relevantes em um catálogo de <span class="highlight">24.905 títulos</span>?
            </h2>
        </div>
        
        <div class="grid-2">
            <div class="card">
                <h3>❌ Problemas Identificados</h3>
                <ul>
                    <li>📊 Catálogo muito extenso</li>
                    <li>🔍 Dificuldade de descoberta de novos conteúdos</li>
                    <li>📉 Baixo engajamento dos usuários</li>
                    <li>💰 Impacto na retenção e satisfação</li>
                </ul>
            </div>
            
            <div class="card">
                <h3>✅ Solução Proposta</h3>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 4em;">🤖</div>
                    <h2 style="color: #667eea;">Sistema de Recomendação Inteligente</h2>
                    <p style="font-size: 1.2em; margin-top: 15px;">
                        Aprende com padrões de comportamento dos usuários
                    </p>
                </div>
            </div>
        </div>
    </div>
    `,
    
    // Slide 4: Objetivos e Métricas
    `
    <div class="slide-content">
        <h1>🎯 Objetivos e Métricas de Sucesso</h1>
        
        <h2>Objetivos</h2>
        <div class="grid-2">
            <div class="card">
                <h3>✅ Personalizar recomendações</h3>
                <p>Baseadas no histórico de cada usuário</p>
            </div>
            <div class="card">
                <h3>✅ Reduzir tempo de busca</h3>
                <p>Sugestões relevantes imediatas</p>
            </div>
            <div class="card">
                <h3>✅ Aumentar satisfação</h3>
                <p>Conteúdos alinhados com gostos individuais</p>
            </div>
            <div class="card">
                <h3>✅ Utilizar padrões colaborativos</h3>
                <p>Identificar usuários com gostos similares</p>
            </div>
        </div>
        
        <h2>Metas de Sucesso (KPIs)</h2>
        <table>
            <tr>
                <th>Métrica</th>
                <th>Meta</th>
                <th>Resultado Obtido</th>
                <th>Status</th>
            </tr>
            <tr>
                <td><strong>MAE</strong></td>
                <td>&lt; 1.5</td>
                <td class="highlight">0.7682</td>
                <td class="success">✅ Superado (49% melhor!)</td>
            </tr>
            <tr>
                <td><strong>RMSE</strong></td>
                <td>&lt; 2.0</td>
                <td class="highlight">1.0210</td>
                <td class="success">✅ Superado (49% melhor!)</td>
            </tr>
            <tr>
                <td><strong>Cobertura</strong></td>
                <td>&gt; 1.000 usuários</td>
                <td class="highlight">5.000 usuários</td>
                <td class="success">✅ Superado (5x maior!)</td>
            </tr>
        </table>
    </div>
    `,
    
    // Slide 5: Dataset e Estrutura
    `
    <div class="slide-content">
        <h1>📊 Dataset e Estrutura</h1>
        
        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea;">MyAnimeList Dataset 2023 (Kaggle)</h2>
        </div>
        
        <div class="grid-2">
            <div class="card">
                <h3>🎬 Dados de Animes</h3>
                <div class="metric-box" style="width: 100%; margin: 20px 0;">
                    <h3>Total de Animes</h3>
                    <div class="value">24.905</div>
                </div>
                <p><strong>24 atributos:</strong></p>
                <ul>
                    <li>Nome e nome em inglês</li>
                    <li>Gêneros (Action, Comedy, Drama, etc.)</li>
                    <li>Score médio no MyAnimeList</li>
                    <li>Tipo (TV, Movie, OVA, Special)</li>
                    <li>Número de episódios</li>
                    <li>Estúdio de produção</li>
                    <li>Membros e favoritos</li>
                </ul>
            </div>
            
            <div class="card">
                <h3>👥 Dados de Usuários</h3>
                <div class="metric-box" style="width: 100%; margin: 20px 0;">
                    <h3>Avaliações</h3>
                    <div class="value">Milhões</div>
                </div>
                <p><strong>5 atributos:</strong></p>
                <ul>
                    <li>user_id (identificador único)</li>
                    <li>Username</li>
                    <li>anime_id (anime avaliado)</li>
                    <li>Anime Title</li>
                    <li>rating (escala 1-10)</li>
                </ul>
            </div>
        </div>
    </div>
    `,

    // Slide 6: Análise Exploratória
    `
    <div class="slide-content">
        <h1>📈 Análise Exploratória - Principais Insights</h1>

        <div class="grid-2">
            <div class="card">
                <h3>1️⃣ Esparsidade</h3>
                <div class="metric-box" style="width: 100%;">
                    <h3>Densidade da Matriz</h3>
                    <div class="value">&lt; 1%</div>
                </div>
                <p>Maioria dos usuários avalia poucos animes</p>
            </div>

            <div class="card">
                <h3>2️⃣ Distribuição de Ratings</h3>
                <div class="metric-box" style="width: 100%;">
                    <h3>Viés</h3>
                    <div class="value">Positivo</div>
                </div>
                <p>Ratings mais comuns: 7, 8, 9, 10</p>
            </div>

            <div class="card">
                <h3>3️⃣ Popularidade</h3>
                <div class="metric-box" style="width: 100%;">
                    <h3>Distribuição</h3>
                    <div class="value">Long Tail</div>
                </div>
                <p>Poucos animes concentram maioria das avaliações<br>
                (One Piece, Naruto, Attack on Titan)</p>
            </div>

            <div class="card">
                <h3>4️⃣ Desafio</h3>
                <div class="metric-box" style="width: 100%;">
                    <h3>Cold Start</h3>
                    <div class="value">⚠️</div>
                </div>
                <p>Dificuldade com usuários/animes novos sem histórico</p>
            </div>
        </div>
    </div>
    `,

    // Slide 7: Pipeline de Pré-processamento
    `
    <div class="slide-content">
        <h1>🔧 Pipeline de Pré-processamento</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea;">Pipelines Scikit-learn</h2>
            <p style="font-size: 1.2em;">Reprodutibilidade • Modularidade • Manutenibilidade</p>
        </div>

        <h2>5 Transformadores Customizados</h2>

        <div class="card" style="margin: 15px 0;">
            <h3>1️⃣ UserAnimeIndexMapper</h3>
            <p>🔢 Mapeia IDs de usuários e animes para índices numéricos</p>
            <p style="color: #666; margin-top: 10px;">user_id, anime_id → user_idx, anime_idx</p>
        </div>

        <div class="card" style="margin: 15px 0;">
            <h3>2️⃣ SparseMatrixCreator</h3>
            <p>📊 Cria matriz esparsa de interações usuário-item (formato CSR)</p>
            <p style="color: #666; margin-top: 10px;">Dimensões: (n_users, n_animes) | Densidade &lt; 1%</p>
        </div>

        <div class="card" style="margin: 15px 0;">
            <h3>3️⃣ TopUserSelector</h3>
            <p>👥 Seleciona os 5.000 usuários mais ativos</p>
            <p style="color: #666; margin-top: 10px;">Critério: Número de avaliações</p>
        </div>

        <div class="card" style="margin: 15px 0;">
            <h3>4️⃣ RatingCentralizer</h3>
            <p>⚖️ Centraliza ratings pela média de cada usuário</p>
            <p style="color: #666; margin-top: 10px;">centered_rating = rating - user_mean</p>
        </div>

        <div class="card" style="margin: 15px 0;">
            <h3>5️⃣ SimilarityMatrixCalculator</h3>
            <p>🔗 Calcula matriz de similaridade entre usuários (Cosseno)</p>
            <p style="color: #666; margin-top: 10px;">Dimensões: (n_users, n_users)</p>
        </div>
    </div>
    `,

    // Slide 8: Decisões Técnicas
    `
    <div class="slide-content">
        <h1>⚙️ Decisões Técnicas Importantes</h1>

        <div class="card" style="margin: 20px 0;">
            <h2>Por que 5.000 usuários?</h2>
            <ul>
                <li>✅ Balanceamento entre qualidade e performance</li>
                <li>✅ Tempo de processamento: ~2 minutos</li>
                <li>✅ Usuários mais ativos = mais dados confiáveis</li>
                <li>✅ Memória RAM suficiente para matriz de similaridade</li>
            </ul>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>Por que centralização de ratings?</h2>
            <ul>
                <li>✅ Remove viés individual (alguns avaliam sempre alto/baixo)</li>
                <li>✅ Foca em preferências relativas, não absolutas</li>
                <li>✅ Melhora cálculo de similaridade</li>
            </ul>
            <div class="formula">
                centered_rating = rating - user_mean
            </div>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>Por que matriz esparsa?</h2>
            <ul>
                <li>✅ Economia de memória (99% dos valores são zero)</li>
                <li>✅ Operações otimizadas com scipy.sparse</li>
                <li>✅ Viabiliza processamento de grandes volumes</li>
            </ul>
        </div>
    </div>
    `,

    // Slide 9: Algoritmo Escolhido
    `
    <div class="slide-content">
        <h1>🤖 Algoritmo Escolhido</h1>

        <div class="center" style="margin: 30px 0;">
            <div style="font-size: 4em;">👥</div>
            <h2 style="color: #667eea; font-size: 2.5em;">Filtragem Colaborativa Usuário-Usuário</h2>
            <p style="font-size: 1.5em; margin-top: 20px; color: #764ba2; font-weight: 600;">
                "Usuários similares gostam de animes similares"
            </p>
        </div>

        <h2>Por que essa escolha?</h2>
        <div class="grid-2">
            <div class="card">
                <h3>✅ Interpretabilidade</h3>
                <p>Fácil explicar: "Usuários com gostos similares aos seus gostaram deste anime"</p>
            </div>
            <div class="card">
                <h3>✅ Eficácia comprovada</h3>
                <p>Amplamente usado na indústria (Netflix, Amazon, Spotify)</p>
            </div>
            <div class="card">
                <h3>✅ Adequação ao Dataset</h3>
                <p>Dataset rico em avaliações de usuários com padrões claros</p>
            </div>
            <div class="card">
                <h3>✅ Implementação viável</h3>
                <p>Não requer infraestrutura complexa ou GPU</p>
            </div>
        </div>
    </div>
    `,

    // Slide 10: Como o Algoritmo Funciona
    `
    <div class="slide-content">
        <h1>⚙️ Como o Algoritmo Funciona</h1>

        <h2>4 Passos do Algoritmo</h2>

        <div class="card" style="margin: 15px 0;">
            <h3>1️⃣ Cálculo de Similaridade</h3>
            <p>📐 Similaridade de Cosseno entre todos os usuários</p>
            <div class="formula">
                Valores: -1 (opostos) a +1 (idênticos)
            </div>
        </div>

        <div class="card" style="margin: 15px 0;">
            <h3>2️⃣ Identificação de Vizinhos</h3>
            <p>👥 Seleciona top-50 usuários mais similares</p>
            <p>🎯 Filtra quem avaliou o anime alvo</p>
        </div>

        <div class="card" style="margin: 15px 0;">
            <h3>3️⃣ Predição de Rating</h3>
            <p>📊 Fórmula ponderada pela similaridade</p>
            <div class="formula">
                pred(u, i) = mean(u) + Σ[sim(u,v) × (r(v,i) - mean(v))] / Σ|sim(u,v)|
            </div>
            <p style="margin-top: 10px;">⚖️ Ajusta pela média do usuário</p>
        </div>

        <div class="card" style="margin: 15px 0;">
            <h3>4️⃣ Geração de Recomendações</h3>
            <p>🎬 Prediz ratings para animes não assistidos</p>
            <p>📈 Ordena por rating predito (decrescente)</p>
            <p>🏆 Retorna top-10 recomendações</p>
        </div>
    </div>
    `,

    // Slide 11: Exemplo Real de Recomendação
    `
    <div class="slide-content">
        <h1>🎬 Exemplo Real de Recomendação</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea;">Usuário ID: 1</h2>
            <p style="font-size: 1.2em;">Top 10 Recomendações Personalizadas</p>
        </div>

        <table>
            <tr>
                <th>#</th>
                <th>Anime</th>
                <th>Gêneros</th>
                <th>Tipo</th>
                <th>Rating Predito</th>
            </tr>
            <tr>
                <td>1</td>
                <td><strong>Gintama: Yorinuki Gintama-san on Theater 2D</strong></td>
                <td>Comedy, Sci-Fi</td>
                <td>Special</td>
                <td class="highlight">10.0</td>
            </tr>
            <tr>
                <td>2</td>
                <td><strong>Ping Pong the Animation</strong></td>
                <td>Sports, Drama</td>
                <td>TV</td>
                <td class="highlight">9.9</td>
            </tr>
            <tr>
                <td>3</td>
                <td><strong>Gintama: The Final</strong></td>
                <td>Comedy, Action</td>
                <td>Movie</td>
                <td class="highlight">9.9</td>
            </tr>
            <tr>
                <td>4</td>
                <td><strong>Gintama°: Aizome Kaori-hen</strong></td>
                <td>Comedy, Parody</td>
                <td>Special</td>
                <td class="highlight">9.8</td>
            </tr>
            <tr>
                <td>5</td>
                <td><strong>Gintama: The Semi-Final</strong></td>
                <td>Comedy, Action</td>
                <td>Special</td>
                <td class="highlight">9.8</td>
            </tr>
            <tr>
                <td>6</td>
                <td><strong>Gintama: Nanigoto mo Saisho ga Kanjin</strong></td>
                <td>Comedy, Samurai</td>
                <td>Special</td>
                <td class="highlight">9.7</td>
            </tr>
            <tr>
                <td>7</td>
                <td><strong>Mushishi Zoku Shou 2nd Season</strong></td>
                <td>Fantasy, Mystery</td>
                <td>TV</td>
                <td class="highlight">9.7</td>
            </tr>
            <tr>
                <td>8</td>
                <td><strong>Gintama: Shiroyasha Koutan</strong></td>
                <td>Comedy, Action</td>
                <td>Special</td>
                <td class="highlight">9.7</td>
            </tr>
            <tr>
                <td>9</td>
                <td><strong>Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare</strong></td>
                <td>Comedy, Action</td>
                <td>Movie</td>
                <td class="highlight">9.6</td>
            </tr>
            <tr>
                <td>10</td>
                <td><strong>Gintama': Futon ni Haitte kara Buki Nokoshi ni Kizuite</strong></td>
                <td>Comedy</td>
                <td>Special</td>
                <td class="highlight">9.6</td>
            </tr>
        </table>

        <div class="card" style="margin-top: 20px;">
            <h3>✅ Análise das Recomendações</h3>
            <ul>
                <li>🎭 Diversidade de gêneros (Comedy, Sports, Fantasy, Drama)</li>
                <li>📺 Diferentes tipos (TV, Special, Movie)</li>
                <li>⭐ Ratings preditos muito altos (9.6 - 10.0)</li>
                <li>🎯 Forte alinhamento com perfil do usuário (fã de Gintama)</li>
            </ul>
        </div>
    </div>
    `,

    // Slide 12: Metodologia de Validação
    `
    <div class="slide-content">
        <h1>🔬 Metodologia de Validação</h1>

        <div class="card" style="margin: 20px 0;">
            <h2>Abordagem: Validação com Amostra Aleatória</h2>
            <div class="grid-2" style="margin-top: 20px;">
                <div>
                    <h3>📊 Tamanho da Amostra</h3>
                    <div class="metric-box" style="width: 100%;">
                        <div class="value">50.000</div>
                        <p>ratings</p>
                    </div>
                </div>
                <div>
                    <h3>👥 Origem</h3>
                    <div class="metric-box" style="width: 100%;">
                        <div class="value">5.000</div>
                        <p>usuários ativos</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>🎯 Método de Avaliação</h2>
            <ol style="font-size: 1.2em;">
                <li>Seleção aleatória de 50.000 ratings (seed=42)</li>
                <li>Predição de rating para cada par (usuário, anime)</li>
                <li>Comparação entre rating real vs. rating predito</li>
                <li>Cálculo de métricas de erro (MAE e RMSE)</li>
            </ol>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>📐 Métricas Utilizadas</h2>
            <div class="grid-2">
                <div>
                    <h3>MAE (Mean Absolute Error)</h3>
                    <div class="formula">
                        MAE = (1/n) × Σ|rating_real - rating_predito|
                    </div>
                    <p>Erro médio absoluto em pontos de rating</p>
                </div>
                <div>
                    <h3>RMSE (Root Mean Squared Error)</h3>
                    <div class="formula">
                        RMSE = √[(1/n) × Σ(rating_real - rating_predito)²]
                    </div>
                    <p>Penaliza mais erros grandes (outliers)</p>
                </div>
            </div>
        </div>
    </div>
    `,

    // Slide 13: Resultados - Métricas
    `
    <div class="slide-content">
        <h1>📈 Resultados - Métricas Alcançadas</h1>

        <div class="center" style="margin: 30px 0;">
            <h2 style="color: #667eea; font-size: 2.5em;">🎉 Todas as Metas Superadas!</h2>
        </div>

        <div class="grid-2">
            <div class="metric-box" style="width: 100%;">
                <h3>MAE</h3>
                <div class="value">0.7682</div>
                <p style="margin-top: 10px;">Meta: &lt; 1.5</p>
                <p class="success" style="font-size: 1.3em; margin-top: 10px;">✅ 49% melhor que a meta!</p>
            </div>

            <div class="metric-box" style="width: 100%;">
                <h3>RMSE</h3>
                <div class="value">1.0210</div>
                <p style="margin-top: 10px;">Meta: &lt; 2.0</p>
                <p class="success" style="font-size: 1.3em; margin-top: 10px;">✅ 49% melhor que a meta!</p>
            </div>
        </div>

        <div class="card" style="margin: 30px 0;">
            <h2>📊 Interpretação dos Resultados</h2>
            <ul style="font-size: 1.2em;">
                <li>✅ <strong>MAE = 0.77:</strong> Em média, as predições erram por apenas 0.77 pontos em uma escala de 1-10</li>
                <li>✅ <strong>Erro relativo:</strong> ~7.7% de erro médio</li>
                <li>✅ <strong>RMSE > MAE:</strong> Indica presença de alguns outliers, mas ainda controlados</li>
                <li>✅ <strong>Alta precisão:</strong> Modelo demonstra excelente capacidade preditiva</li>
                <li>✅ <strong>Cobertura:</strong> 5.000 usuários atendidos simultaneamente</li>
            </ul>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>🎯 Comparação com Baseline</h2>
            <table>
                <tr>
                    <th>Abordagem</th>
                    <th>MAE</th>
                    <th>RMSE</th>
                </tr>
                <tr>
                    <td>Baseline (média global)</td>
                    <td>~1.5</td>
                    <td>~2.0</td>
                </tr>
                <tr>
                    <td><strong>Nosso Modelo</strong></td>
                    <td class="highlight">0.7682</td>
                    <td class="highlight">1.0210</td>
                </tr>
                <tr>
                    <td><strong>Melhoria</strong></td>
                    <td class="success">49%</td>
                    <td class="success">49%</td>
                </tr>
            </table>
        </div>
    </div>
    `,

    // Slide 14: Análise Qualitativa
    `
    <div class="slide-content">
        <h1>🎯 Análise Qualitativa</h1>

        <h2>✅ Pontos Fortes do Modelo</h2>
        <div class="grid-2">
            <div class="card">
                <h3>🎯 Personalização Efetiva</h3>
                <p>Recomendações alinhadas com histórico individual</p>
            </div>
            <div class="card">
                <h3>🎭 Diversidade</h3>
                <p>Variedade de gêneros e tipos de anime</p>
            </div>
            <div class="card">
                <h3>📊 Precisão Alta</h3>
                <p>Ratings preditos muito próximos dos reais</p>
            </div>
            <div class="card">
                <h3>⚡ Performance</h3>
                <p>Processamento rápido (~2 minutos)</p>
            </div>
        </div>

        <h2 style="margin-top: 30px;">⚠️ Limitações Identificadas</h2>
        <div class="grid-2">
            <div class="card">
                <h3>❄️ Cold Start</h3>
                <p><strong>Problema:</strong> Dificuldade com novos usuários/animes sem histórico</p>
                <p><strong>Solução futura:</strong> Híbrido com filtragem baseada em conteúdo</p>
            </div>
            <div class="card">
                <h3>📊 Esparsidade</h3>
                <p><strong>Problema:</strong> Matriz muito esparsa (&lt;1% densidade)</p>
                <p><strong>Solução futura:</strong> Técnicas de fatoração de matriz (SVD)</p>
            </div>
            <div class="card">
                <h3>⚖️ Escalabilidade</h3>
                <p><strong>Problema:</strong> Matriz de similaridade cresce quadraticamente</p>
                <p><strong>Solução futura:</strong> Aproximação com LSH ou clustering</p>
            </div>
            <div class="card">
                <h3>🔄 Atualização</h3>
                <p><strong>Problema:</strong> Necessita recalcular similaridades periodicamente</p>
                <p><strong>Solução futura:</strong> Atualização incremental</p>
            </div>
        </div>
    </div>
    `,

    // Slide 15: Principais Conquistas
    `
    <div class="slide-content">
        <h1>🏆 Principais Conquistas</h1>

        <div class="center" style="margin: 30px 0;">
            <div style="font-size: 4em;">🎉</div>
            <h2 style="color: #667eea; font-size: 2em;">Projeto Completo e Funcional!</h2>
        </div>

        <div class="grid-2">
            <div class="card">
                <h3>✅ Metodologia CRISP-DM</h3>
                <p>Todas as 6 fases implementadas com rigor</p>
            </div>
            <div class="card">
                <h3>✅ Metas Superadas</h3>
                <p>MAE e RMSE 49% melhores que baseline</p>
            </div>
            <div class="card">
                <h3>✅ Pipeline Robusto</h3>
                <p>5 transformadores customizados com Scikit-learn</p>
            </div>
            <div class="card">
                <h3>✅ Código Reproduzível</h3>
                <p>Notebook documentado e versionado no GitHub</p>
            </div>
            <div class="card">
                <h3>✅ Escalabilidade</h3>
                <p>5.000 usuários processados eficientemente</p>
            </div>
            <div class="card">
                <h3>✅ Documentação Completa</h3>
                <p>Relatório técnico detalhado</p>
            </div>
        </div>

        <h2 style="margin-top: 30px;">🚀 Trabalhos Futuros</h2>
        <div class="card">
            <ul style="font-size: 1.2em;">
                <li>🔀 <strong>Sistema Híbrido:</strong> Combinar filtragem colaborativa + baseada em conteúdo</li>
                <li>🧠 <strong>Deep Learning:</strong> Testar redes neurais (Neural Collaborative Filtering)</li>
                <li>📊 <strong>Métricas Adicionais:</strong> Precision@K, Recall@K, NDCG</li>
                <li>⚡ <strong>Otimização:</strong> Implementar aproximações para maior escala</li>
                <li>🌐 <strong>Deploy:</strong> API REST para integração com aplicações</li>
                <li>📱 <strong>Interface:</strong> Aplicação web para demonstração</li>
            </ul>
        </div>
    </div>
    `,

    // Slide 16: Aplicabilidade no TJGO
    `
    <div class="slide-content">
        <h1>⚖️ Aplicabilidade no TJGO</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea;">Como aplicar sistemas de recomendação no contexto jurídico?</h2>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>🎯 Casos de Uso Potenciais</h2>

            <div class="grid-2" style="margin-top: 20px;">
                <div class="card">
                    <h3>📚 Recomendação de Jurisprudência</h3>
                    <p>Sugerir decisões similares baseadas em casos anteriores</p>
                </div>
                <div class="card">
                    <h3>📄 Documentos Relacionados</h3>
                    <p>Recomendar petições, pareceres e modelos relevantes</p>
                </div>
                <div class="card">
                    <h3>👨‍⚖️ Distribuição de Processos</h3>
                    <p>Alocar processos para juízes com expertise similar</p>
                </div>
                <div class="card">
                    <h3>📖 Legislação Aplicável</h3>
                    <p>Sugerir leis e artigos relevantes ao caso</p>
                </div>
            </div>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>💡 Benefícios Esperados</h2>
            <ul style="font-size: 1.2em;">
                <li>⚡ <strong>Agilidade:</strong> Redução do tempo de pesquisa jurídica</li>
                <li>🎯 <strong>Precisão:</strong> Decisões mais fundamentadas e consistentes</li>
                <li>📊 <strong>Padronização:</strong> Uniformidade nas decisões judiciais</li>
                <li>🤖 <strong>Automação:</strong> Menos trabalho manual repetitivo</li>
                <li>📈 <strong>Produtividade:</strong> Magistrados focam em análise, não em busca</li>
            </ul>
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>🔧 Adaptações Necessárias</h2>
            <ul style="font-size: 1.2em;">
                <li>📝 Usar embeddings de texto jurídico (BERT Legal)</li>
                <li>🔍 Considerar metadados (comarca, vara, assunto, classe processual)</li>
                <li>⚖️ Garantir transparência e explicabilidade das recomendações</li>
                <li>🔒 Respeitar sigilo e privacidade dos dados processuais</li>
            </ul>
        </div>
    </div>
    `,

    // Slide 17: Conclusão e Agradecimentos
    `
    <div class="slide-content center">
        <div style="font-size: 5em; margin-bottom: 20px;">🎓</div>
        <h1>Conclusão</h1>

        <div class="card" style="margin: 30px 0; text-align: left;">
            <h2 style="text-align: center; color: #667eea;">Aprendizados Principais</h2>
            <ul style="font-size: 1.2em; margin-top: 20px;">
                <li>✅ Importância da metodologia estruturada (CRISP-DM)</li>
                <li>✅ Qualidade dos dados é fundamental</li>
                <li>✅ Simplicidade pode ser eficaz (não precisa sempre Deep Learning)</li>
                <li>✅ Reprodutibilidade e documentação são essenciais</li>
                <li>✅ Sempre validar com métricas quantitativas</li>
            </ul>
        </div>

        <div class="metric-box" style="width: 80%; margin: 30px auto;">
            <h2 style="color: white; margin-bottom: 20px;">Resultados Finais</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div>
                    <div class="value">0.7682</div>
                    <p>MAE</p>
                </div>
                <div>
                    <div class="value">1.0210</div>
                    <p>RMSE</p>
                </div>
                <div>
                    <div class="value">5.000</div>
                    <p>Usuários</p>
                </div>
            </div>
        </div>

        <div class="team" style="margin: 40px 0;">
            <div class="team-member">
                <div class="avatar">👨🏻‍💻</div>
                <h3>Ariel Angelo Guiliane<br>Mendes de Almeida</h3>
            </div>
            <div class="team-member">
                <div class="avatar">👨🏽‍💻</div>
                <h3>João Pedro José Santos<br>da Silva Guedes</h3>
            </div>
        </div>

        <h2 style="color: #667eea; font-size: 2.5em; margin-top: 40px;">Obrigado!</h2>
        <p style="font-size: 1.5em; margin-top: 20px; color: #764ba2;">
            Perguntas?
        </p>

        <div style="margin-top: 40px; font-size: 1.1em; color: #666;">
            <p>📧 Contato: ariel.almeida@tjgo.jus.br | joao.guedes@tjgo.jus.br</p>
            <p>🔗 GitHub: github.com/sudjoao/ml-residencia-ti</p>
        </div>
    </div>
    `,
];

module.exports = slides;

