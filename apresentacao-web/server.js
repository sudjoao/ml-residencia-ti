const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware de segurança
app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

// Rota principal - Landing page
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apresentação Final - ML</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            padding: 60px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 600px;
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        h1 {
            color: #667eea;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        h2 {
            color: #764ba2;
            font-weight: 300;
            margin-bottom: 20px;
        }
        .info {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 15px;
            margin: 30px 0;
            border-left: 5px solid #667eea;
            text-align: left;
        }
        .info h3 {
            color: #667eea;
            margin-bottom: 15px;
        }
        .info ul {
            list-style: none;
            padding: 0;
        }
        .info li {
            padding: 8px 0;
            color: #555;
            border-bottom: 1px solid #e0e0e0;
        }
        .info li:last-child {
            border-bottom: none;
        }
        .info strong {
            color: #333;
        }
        .btn {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 50px;
            border-radius: 50px;
            text-decoration: none;
            font-size: 1.3em;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
            margin-top: 20px;
        }
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }
        .icon {
            font-size: 4em;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="icon">🎓</div>
        <h1>Residência em TI - TJGO</h1>
        <h2>Projeto Final - Machine Learning</h2>

        <div class="info">
            <h3>📊 Informações do Projeto</h3>
            <ul>
                <li><strong>Tema:</strong> Sistema de Recomendação de Animes</li>
                <li><strong>Metodologia:</strong> CRISP-DM</li>
                <li><strong>Algoritmo:</strong> Filtragem Colaborativa (User-Based)</li>
                <li><strong>Resultados:</strong> MAE = 0.7682 | RMSE = 1.0210</li>
                <li><strong>Equipe:</strong> Ariel Guiliane e João Pedro Guedes</li>
            </ul>
        </div>

        <a href="/apresentacao" class="btn">🚀 Iniciar Apresentação</a>
    </div>
</body>
</html>
    `);
});

// Rota da apresentação
app.get('/apresentacao', (req, res) => {
    res.send(getApresentacaoHTML());
});

function getApresentacaoHTML() {
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Recomendação de Animes - Apresentação</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #1a1a2e;
            color: #fff;
            overflow: hidden;
        }

        .presentation {
            width: 100vw;
            height: 100vh;
            position: relative;
        }

        .slide {
            width: 100%;
            height: 100%;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: absolute;
            top: 0;
            left: 0;
        }

        .slide.active {
            display: flex;
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .slide-content {
            max-width: 1200px;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 50px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            color: #333;
            overflow-y: auto;
            max-height: 85vh;
        }

        h1 {
            color: #667eea;
            font-size: 3em;
            margin-bottom: 20px;
            text-align: center;
        }

        h2 {
            color: #764ba2;
            font-size: 2em;
            margin: 30px 0 20px 0;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }

        h3 {
            color: #667eea;
            font-size: 1.5em;
            margin: 20px 0 15px 0;
        }

        ul, ol {
            margin: 15px 0 15px 40px;
            line-height: 1.8;
        }

        li {
            margin: 10px 0;
            font-size: 1.1em;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        th, td {
            padding: 15px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: 600;
        }

        tr:nth-child(even) {
            background: #f8f9fa;
        }

        .controls {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 20px;
            z-index: 1000;
        }

        .btn-control {
            background: rgba(255, 255, 255, 0.9);
            color: #667eea;
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 1.1em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .btn-control:hover {
            background: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        .btn-control:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .slide-number {
            position: fixed;
            top: 30px;
            right: 30px;
            background: rgba(255, 255, 255, 0.9);
            color: #667eea;
            padding: 10px 20px;
            border-radius: 50px;
            font-weight: 600;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .logo {
            position: fixed;
            top: 30px;
            left: 30px;
            font-size: 2em;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px 20px;
            border-radius: 50px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .highlight {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 5px 15px;
            border-radius: 5px;
            font-weight: 600;
        }

        .success {
            color: #28a745;
            font-weight: 600;
        }

        .chart-container {
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
        }

        .metric-box {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            margin: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .metric-box h3 {
            color: white;
            margin: 0 0 10px 0;
        }

        .metric-box .value {
            font-size: 2.5em;
            font-weight: 700;
        }

        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
        }

        .card {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 15px;
            border-left: 5px solid #667eea;
        }

        .formula {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            font-size: 1.2em;
            text-align: center;
            margin: 20px 0;
            border: 2px solid #667eea;
        }

        .center {
            text-align: center;
        }

        .team {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin: 30px 0;
        }

        .team-member {
            text-align: center;
            padding: 20px;
        }

        .team-member .avatar {
            font-size: 4em;
            margin-bottom: 10px;
        }

        .team-member h3 {
            color: #667eea;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="logo">🎓</div>
    <div class="slide-number" id="slideNumber">1 / 17</div>

    <div class="presentation" id="presentation">
        ${generateSlides()}
    </div>

    <div class="controls">
        <button class="btn-control" id="prevBtn" onclick="previousSlide()">◀ Anterior</button>
        <button class="btn-control" id="homeBtn" onclick="window.location.href='/'">🏠 Início</button>
        <button class="btn-control" id="nextBtn" onclick="nextSlide()">Próximo ▶</button>
    </div>

    <script>
        let currentSlide = 0;
        const totalSlides = ${getSlides().length};

        function showSlide(n) {
            const slides = document.querySelectorAll('.slide');

            if (n >= totalSlides) {
                currentSlide = totalSlides - 1;
            } else if (n < 0) {
                currentSlide = 0;
            } else {
                currentSlide = n;
            }

            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (index === currentSlide) {
                    slide.classList.add('active');
                }
            });

            document.getElementById('slideNumber').textContent = (currentSlide + 1) + ' / ' + totalSlides;

            // Atualizar botões
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function previousSlide() {
            showSlide(currentSlide - 1);
        }

        // Navegação por teclado
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowRight' || event.key === ' ') {
                nextSlide();
            } else if (event.key === 'ArrowLeft') {
                previousSlide();
            } else if (event.key === 'Home') {
                showSlide(0);
            } else if (event.key === 'End') {
                showSlide(totalSlides - 1);
            }
        });

        // Mostrar primeiro slide
        showSlide(0);
    </script>
</body>
</html>
    `;
}

function getSlides() {
    return require('./slides.js');
}

function generateSlides() {
    const slides = getSlides();
    return slides.map((content, index) => {
        return `
        <div class="slide ${index === 0 ? 'active' : ''}">
            ${content}
        </div>
        `;
    }).join('');
}

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   🚀 SERVIDOR RODANDO COM SUCESSO!                        ║
║                                                            ║
║   📍 URL: http://localhost:${PORT}                           ║
║                                                            ║
║   🎬 Apresentação disponível em:                          ║
║      http://localhost:${PORT}/apresentacao                   ║
║                                                            ║
║   📊 Total de slides: 17                                  ║
║                                                            ║
║   ⌨️  Navegação:                                          ║
║      • Setas ← → para navegar                            ║
║      • Espaço para avançar                               ║
║      • Home/End para ir ao início/fim                    ║
║                                                            ║
║   ⌨️  Pressione Ctrl+C para parar o servidor              ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `);

    // Abrir navegador automaticamente
    const open = require('child_process').exec;
    open(`open http://localhost:${PORT}`);
});

