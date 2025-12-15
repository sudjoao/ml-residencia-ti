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
                <h3>✅ Comparar duas abordagens</h3>
                <p>User-Based CF vs Item-Based CF</p>
            </div>
            <div class="card">
                <h3>✅ Reduzir tempo de busca</h3>
                <p>Aumentar satisfação e engajamento</p>
            </div>
            <div class="card">
                <h3>✅ Identificar trade-offs</h3>
                <p>Acurácia vs Performance</p>
            </div>
        </div>

        <h2>Metas de Sucesso (KPIs)</h2>
        <table>
            <tr>
                <th>Métrica</th>
                <th>Meta</th>
                <th>User-Based CF</th>
                <th>Item-Based CF</th>
            </tr>
            <tr>
                <td><strong>MAE</strong></td>
                <td>&lt; 1.5</td>
                <td class="highlight">0.7682 ✅</td>
                <td class="highlight">0.8689 ✅</td>
            </tr>
            <tr>
                <td><strong>RMSE</strong></td>
                <td>&lt; 2.0</td>
                <td class="highlight">1.0210 ✅</td>
                <td class="highlight">1.1599 ✅</td>
            </tr>
            <tr>
                <td><strong>Cobertura</strong></td>
                <td>&gt; 1.000 usuários</td>
                <td class="highlight">5.000 ✅</td>
                <td class="highlight">5.000 ✅</td>
            </tr>
            <tr>
                <td><strong>Tempo/Predição</strong></td>
                <td>&lt; 5ms</td>
                <td class="highlight">2.16ms ✅</td>
                <td class="highlight">0.43ms ✅</td>
            </tr>
        </table>
        <div class="highlight" style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-left: 4px solid #667eea; color: #333;">
            <strong>🎉 Resultado:</strong> AMBAS as abordagens superaram todas as metas!
        </div>
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

    // Slide 11: Exemplo Real de Recomendação - User-Based CF
    `
    <div class="slide-content">
        <h1>🎬 Exemplo Real de Recomendação - User-Based CF</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea;">Usuário ID: 48</h2>
            <p style="font-size: 1.1em;">Total de avaliações: 556 | Rating médio: 6.28</p>
            <p style="font-size: 1em; color: #764ba2;">Favoritos: Dennou Coil (10), Fullmetal Alchemist (9)</p>
        </div>

        <table>
            <tr>
                <th>#</th>
                <th>Anime</th>
                <th>Gêneros</th>
                <th>Rating Predito</th>
            </tr>
            <tr>
                <td>1</td>
                <td><strong>Ketsuinu</strong></td>
                <td>Comedy</td>
                <td class="highlight">10.00</td>
            </tr>
            <tr>
                <td>2</td>
                <td><strong>Ashita no Eleven-tachi</strong></td>
                <td>Sports</td>
                <td class="highlight">10.00</td>
            </tr>
            <tr>
                <td>3</td>
                <td><strong>Jakusansei Million Arthur</strong></td>
                <td>Fantasy</td>
                <td class="highlight">9.72</td>
            </tr>
            <tr>
                <td>4</td>
                <td><strong>Arifureta Itsuka</strong></td>
                <td>Fantasy</td>
                <td class="highlight">9.69</td>
            </tr>
            <tr>
                <td>5</td>
                <td><strong>Tsushima Maru</strong></td>
                <td>Drama</td>
                <td class="highlight">9.60</td>
            </tr>
        </table>

        <div class="card" style="margin-top: 20px;">
            <h3>✅ Análise das Recomendações (User-Based CF)</h3>
            <ul>
                <li>🎭 Diversidade de gêneros (Comedy, Sports, Fantasy, Drama)</li>
                <li>⭐ Ratings preditos muito altos (9.6 - 10.0)</li>
                <li>🎯 Sistema captura variedade de gostos do usuário</li>
                <li>👥 Baseado nos 50 usuários mais similares</li>
            </ul>
        </div>
    </div>
    `,

    // Slide 12: Segunda Abordagem - Item-Based CF
    `
    <div class="slide-content">
        <h1>🔄 Segunda Abordagem: Item-Based CF</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea;">Filtragem Colaborativa Item-Item (Anime-Anime)</h2>
        </div>

        <div class="grid-2">
            <div class="card">
                <h3>🔍 Diferença Fundamental</h3>
                <table style="font-size: 0.9em;">
                    <tr>
                        <th>Aspecto</th>
                        <th>User-Based</th>
                        <th>Item-Based</th>
                    </tr>
                    <tr>
                        <td><strong>Similaridade</strong></td>
                        <td>Entre USUÁRIOS</td>
                        <td class="highlight">Entre ANIMES</td>
                    </tr>
                    <tr>
                        <td><strong>Princípio</strong></td>
                        <td>"Usuários similares gostam..."</td>
                        <td class="highlight">"Animes similares agradam..."</td>
                    </tr>
                </table>
            </div>

            <div class="card">
                <h3>⚡ Vantagens do Item-Based</h3>
                <ul>
                    <li><strong>5x mais rápido</strong> nas predições (0.43ms vs 2.16ms)</li>
                    <li><strong>87% mais rápido</strong> no treinamento (7.65s vs 120s)</li>
                    <li><strong>Melhor escalabilidade</strong> (matriz item-item mais estável)</li>
                    <li><strong>Recomendações consistentes</strong> com preferências estabelecidas</li>
                </ul>
            </div>
        </div>

        <div class="highlight" style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%); color: white; border-radius: 10px; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
            <h3 style="margin: 0; font-size: 1.5em;">💡 Princípio: "Animes similares agradam os mesmos usuários"</h3>
        </div>
    </div>
    `,

    // Slide 13: Exemplo Real - Item-Based CF
    `
    <div class="slide-content">
        <h1>🎬 Exemplo Real - Item-Based CF</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea;">Mesmo Usuário (ID: 48) - Para Comparação Direta</h2>
        </div>

        <table>
            <tr>
                <th>#</th>
                <th>Anime</th>
                <th>Rating Predito</th>
                <th>Score MAL</th>
                <th>Gêneros</th>
            </tr>
            <tr>
                <td>1</td>
                <td><strong>Kara no Kyoukai Remix: Gate of Seventh Heaven</strong></td>
                <td class="highlight">7.88</td>
                <td>7.55</td>
                <td>Action, Mystery, Romance</td>
            </tr>
            <tr>
                <td>2</td>
                <td><strong>Kara no Kyoukai Movie: Mirai Fukuin</strong></td>
                <td class="highlight">7.85</td>
                <td>8.00</td>
                <td>Drama, Mystery, Supernatural</td>
            </tr>
            <tr>
                <td>3</td>
                <td><strong>Sakasama no Patema: Beginning of the Day</strong></td>
                <td class="highlight">7.79</td>
                <td>7.34</td>
                <td>Sci-Fi</td>
            </tr>
            <tr>
                <td>4</td>
                <td><strong>Koukaku Kidoutai 2.0</strong></td>
                <td class="highlight">7.77</td>
                <td>7.98</td>
                <td>Action, Sci-Fi</td>
            </tr>
            <tr>
                <td>5</td>
                <td><strong>Mardock Scramble: The First Compression</strong></td>
                <td class="highlight">7.76</td>
                <td>7.43</td>
                <td>Action, Sci-Fi</td>
            </tr>
            <tr>
                <td>6</td>
                <td><strong>Fate/stay night: Unlimited Blade Works Prologue</strong></td>
                <td class="highlight">7.76</td>
                <td>8.04</td>
                <td>Action, Fantasy, Supernatural</td>
            </tr>
            <tr>
                <td>7</td>
                <td><strong>Koukaku Kidoutai Arise: Ghost in the Shell</strong></td>
                <td class="highlight">7.75</td>
                <td>7.44</td>
                <td>Sci-Fi</td>
            </tr>
            <tr>
                <td>8</td>
                <td><strong>ef: A Tale of Melodies.</strong></td>
                <td class="highlight">7.74</td>
                <td>8.00</td>
                <td>Drama, Mystery, Romance</td>
            </tr>
            <tr>
                <td>9</td>
                <td><strong>Hoshi wo Ou Kodomo</strong></td>
                <td class="highlight">7.74</td>
                <td>7.52</td>
                <td>Adventure, Fantasy, Romance</td>
            </tr>
            <tr>
                <td>10</td>
                <td><strong>Dareka no Manazashi</strong></td>
                <td class="highlight">7.73</td>
                <td>7.32</td>
                <td>Drama, Slice of Life</td>
            </tr>
        </table>

        <div class="grid-2" style="margin-top: 20px;">
            <div class="card">
                <h3>📊 Observações - Item-Based</h3>
                <ul>
                    <li>✅ Ratings preditos mais <strong>conservadores</strong> (7.7-7.9 vs 9.6-10.0)</li>
                    <li>✅ Animes com <strong>scores MAL mais altos</strong> (7.3-8.0)</li>
                    <li>✅ Maior <strong>consistência de gêneros</strong> (Action, Sci-Fi, Mystery)</li>
                </ul>
            </div>

            <div class="card">
                <h3>⚖️ Comparação</h3>
                <ul>
                    <li><strong>User-Based:</strong> Mais diversidade, descoberta</li>
                    <li><strong>Item-Based:</strong> Mais segurança, alinhamento</li>
                    <li>🎯 Ambas válidas, propósitos diferentes!</li>
                </ul>
            </div>
        </div>
    </div>
    `,

    // Slide 14: Metodologia de Validação
    `
    <div class="slide-content">
        <h1>🔬 Metodologia de Validação</h1>

        <div class="highlight" style="padding: 15px; background: #f0f9ff; border-left: 4px solid #667eea; margin-bottom: 20px; color: #333;">
            <strong>⚖️ Objetivo:</strong> Comparação justa entre User-Based CF e Item-Based CF usando a mesma metodologia
        </div>

        <div class="card" style="margin: 20px 0;">
            <h2>Abordagem: Validação com Amostra Aleatória (mesma para ambas)</h2>
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
            <h2>📐 Métricas Avaliadas</h2>
            <div class="grid-2">
                <div>
                    <h3>🎯 Acurácia</h3>
                    <ul>
                        <li><strong>MAE</strong> - Mean Absolute Error</li>
                        <li><strong>RMSE</strong> - Root Mean Squared Error</li>
                    </ul>
                </div>
                <div>
                    <h3>⚡ Performance</h3>
                    <ul>
                        <li><strong>Tempo de Treinamento</strong></li>
                        <li><strong>Tempo de Predição</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `,

    // Slide 15: Comparação de Acurácia
    `
    <div class="slide-content">
        <h1>📈 Comparação de Acurácia 🎯</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea; font-size: 2em;">Resultados de Acurácia</h2>
        </div>

        <table>
            <tr>
                <th>Métrica</th>
                <th>Meta</th>
                <th>User-Based</th>
                <th>Item-Based</th>
                <th>Melhor</th>
            </tr>
            <tr>
                <td><strong>MAE</strong></td>
                <td>&lt; 1.5</td>
                <td class="highlight">0.7682</td>
                <td class="highlight">0.8689</td>
                <td class="success">User-Based (13% melhor)</td>
            </tr>
            <tr>
                <td><strong>RMSE</strong></td>
                <td>&lt; 2.0</td>
                <td class="highlight">1.0210</td>
                <td class="highlight">1.1599</td>
                <td class="success">User-Based (14% melhor)</td>
            </tr>
            <tr>
                <td><strong>Status</strong></td>
                <td>-</td>
                <td class="success">✅ 49% melhor</td>
                <td class="success">✅ 42% melhor</td>
                <td class="success">Ambas superam!</td>
            </tr>
        </table>

        <div class="grid-2" style="margin-top: 30px;">
            <div class="metric-box" style="width: 100%;">
                <h3>User-Based CF</h3>
                <div class="value" style="font-size: 2.5em;">0.77</div>
                <p>pontos de erro médio</p>
                <p class="success">Mais preciso</p>
            </div>

            <div class="metric-box" style="width: 100%;">
                <h3>Item-Based CF</h3>
                <div class="value" style="font-size: 2.5em;">0.87</div>
                <p>pontos de erro médio</p>
                <p class="success">Ainda excelente!</p>
            </div>
        </div>

        <div class="highlight" style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-left: 4px solid #667eea; color: #333;">
            <h3 style="margin: 0; color: #333;">💡 Conclusão</h3>
            <p style="font-size: 1.2em; margin: 10px 0 0 0; color: #333;">
                ✅ User-Based é 13% mais preciso<br>
                ✅ Item-Based erra apenas 0.10 pontos a mais<br>
                ✅ <strong>AMBAS superam largamente as metas!</strong>
            </p>
        </div>
    </div>
    `,

    // Slide 16: Comparação de Performance
    `
    <div class="slide-content">
        <h1>⚡ Comparação de Performance</h1>

        <div class="center" style="margin: 20px 0;">
            <h2 style="color: #667eea; font-size: 2em;">Resultados de Performance</h2>
        </div>

        <table>
            <tr>
                <th>Métrica</th>
                <th>User-Based</th>
                <th>Item-Based</th>
                <th>Vantagem</th>
            </tr>
            <tr>
                <td><strong>Tempo de Treinamento</strong></td>
                <td>~120s</td>
                <td class="highlight">7.65s</td>
                <td class="success">Item-Based 16x mais rápido</td>
            </tr>
            <tr>
                <td><strong>Tempo de Predição (50k)</strong></td>
                <td>107.79s</td>
                <td class="highlight">21.63s</td>
                <td class="success">Item-Based 5x mais rápido</td>
            </tr>
            <tr>
                <td><strong>Tempo/Predição</strong></td>
                <td>2.16 ms</td>
                <td class="highlight">0.43 ms</td>
                <td class="success">Item-Based 5x mais rápido</td>
            </tr>
            <tr>
                <td><strong>Meta (&lt; 5ms)</strong></td>
                <td class="success">✅ Atende</td>
                <td class="success">✅ Atende</td>
                <td class="success">Ambas viáveis!</td>
            </tr>
        </table>

        <div class="grid-2" style="margin-top: 30px;">
            <div class="card">
                <h3>🐢 User-Based CF</h3>
                <ul>
                    <li>⚠️ Mais lento (2.16ms/predição)</li>
                    <li>⚠️ Treinamento demorado (120s)</li>
                    <li>✅ Ainda atende requisitos de produção</li>
                </ul>
            </div>

            <div class="card">
                <h3>🚀 Item-Based CF</h3>
                <ul>
                    <li>✅ Muito mais rápido (0.43ms/predição)</li>
                    <li>✅ Treinamento 16x mais rápido</li>
                    <li>✅ Melhor para produção em escala</li>
                </ul>
            </div>
        </div>

        <div class="highlight" style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%); color: white; border-radius: 10px; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
            <h3 style="margin: 0; font-size: 1.5em;">⚖️ Trade-off: User-Based é 13% mais preciso, mas Item-Based é 5x mais rápido!</h3>
        </div>
    </div>
    `,

    // Slide 17: Análise Qualitativa Comparativa
    `
    <div class="slide-content">
        <h1>📊 Análise Qualitativa Comparativa</h1>

        <div class="grid-2">
            <div class="card">
                <h3>👥 User-Based CF</h3>
                <h4 style="color: #28a745;">✅ Pontos Fortes</h4>
                <ul>
                    <li>Maior precisão (13% melhor)</li>
                    <li>Maior diversidade</li>
                    <li>Descoberta de conteúdo</li>
                </ul>
                <h4 style="color: #ffc107; margin-top: 15px;">⚠️ Limitações</h4>
                <ul>
                    <li>5x mais lento</li>
                    <li>Escalabilidade limitada</li>
                    <li>Cold start com usuários novos</li>
                </ul>
            </div>

            <div class="card">
                <h3>🎬 Item-Based CF</h3>
                <h4 style="color: #28a745;">✅ Pontos Fortes</h4>
                <ul>
                    <li>5x mais rápido</li>
                    <li>Melhor escalabilidade</li>
                    <li>Recomendações consistentes</li>
                </ul>
                <h4 style="color: #ffc107; margin-top: 15px;">⚠️ Limitações</h4>
                <ul>
                    <li>13% menos preciso</li>
                    <li>Menor diversidade</li>
                    <li>Mais conservador</li>
                </ul>
            </div>
        </div>

        <div class="card" style="margin-top: 30px;">
            <h3>⚠️ Limitações Comuns</h3>
            <ul style="font-size: 1.1em;">
                <li>Cold Start (novos usuários/animes sem histórico)</li>
                <li>Esparsidade dos dados (densidade &lt; 5%)</li>
                <li>Amostra limitada a 5.000 usuários</li>
            </ul>
        </div>
    </div>
    `,

    // Slide 18: Recomendações de Uso
    `
    <div class="slide-content">
        <h1>🎯 Recomendações de Uso</h1>

        <div class="grid-2">
            <div class="card">
                <h3>💡 Cenário 1: Plataforma de Produção</h3>
                <p><strong>Recomendação:</strong> Sistema Híbrido</p>
                <div class="highlight" style="padding: 15px; background: #f0f9ff; border-radius: 8px; margin: 10px 0; color: #333;">
                    <strong>70% Item-Based + 30% User-Based</strong>
                </div>
                <p>✅ Combina performance com diversidade</p>
            </div>

            <div class="card">
                <h3>💡 Cenário 2: Recursos Limitados</h3>
                <p><strong>Recomendação:</strong> Item-Based CF exclusivamente</p>
                <p>✅ 5x mais rápido</p>
                <p>✅ Apenas 13% de perda em acurácia</p>
            </div>

            <div class="card">
                <h3>💡 Cenário 3: Máxima Precisão</h3>
                <p><strong>Recomendação:</strong> User-Based CF</p>
                <p>✅ MAE 13% melhor</p>
                <p>✅ Maior diversidade</p>
            </div>

            <div class="card">
                <h3>💡 Cenário 4: Perfis Diferentes</h3>
                <ul>
                    <li>👶 <strong>Novos (&lt;10 avaliações):</strong> Item-Based</li>
                    <li>👤 <strong>Moderados (10-100):</strong> 70% Item + 30% User</li>
                    <li>🌟 <strong>Ativos (100+):</strong> 50% Item + 50% User</li>
                </ul>
            </div>
        </div>

        <div class="highlight" style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%); color: white; border-radius: 10px; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
            <h3 style="margin: 0; font-size: 1.5em;">💡 Insight: Personalizar a estratégia de recomendação ao perfil do usuário!</h3>
        </div>
    </div>
    `,

    // Slide 19: Principais Conquistas
    `
    <div class="slide-content">
        <h1>🏆 Principais Conquistas</h1>

        <div class="grid-2">
            <div class="card">
                <h3>✅ Metodologia CRISP-DM Completa</h3>
                <p>Todas as 6 fases executadas rigorosamente</p>
            </div>

            <div class="card">
                <h3>✅ Duas Abordagens Implementadas</h3>
                <ul>
                    <li>User-Based CF: MAE 0.7682 (49% melhor)</li>
                    <li>Item-Based CF: MAE 0.8689 (42% melhor)</li>
                </ul>
            </div>

            <div class="card">
                <h3>✅ Análise Comparativa Completa</h3>
                <ul>
                    <li>Acurácia: User-Based 13% melhor</li>
                    <li>Performance: Item-Based 5x mais rápido</li>
                </ul>
            </div>

            <div class="card">
                <h3>✅ Recomendações Práticas</h3>
                <p>Para diferentes cenários de uso, incluindo sistema híbrido</p>
            </div>

            <div class="card">
                <h3>✅ Pipeline Reprodutível</h3>
                <p>Scikit-learn com melhores práticas</p>
            </div>

            <div class="card">
                <h3>✅ Documentação Completa</h3>
                <p>Código aberto no GitHub</p>
            </div>
        </div>

        <div class="highlight" style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%); color: white; border-radius: 10px; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
            <h3 style="margin: 0; font-size: 1.8em;">🎓 Aprendizado: Não existe solução universalmente melhor - tudo depende do contexto!</h3>
        </div>
    </div>
    `,

    // Slide 20: Agradecimentos
    `
    <div class="slide-content center">
        <div style="font-size: 5em; margin-bottom: 20px;">🎓</div>

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

        <h2 style="color: #667eea; font-size: 2.5em; margin-top: 40px;">Muito Obrigado!</h2>
        <p style="font-size: 1.5em; margin-top: 20px; color: #764ba2;">
            Perguntas?
        </p>

        <div style="margin-top: 40px; font-size: 1.1em; color: #666;">
            <p>🔗 GitHub: github.com/sudjoao/ml-residencia-ti</p>
        </div>
    </div>
    `,
];

module.exports = slides;

