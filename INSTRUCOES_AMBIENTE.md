# Configuração do Ambiente Local - NotebookFinal-3.ipynb

## 📋 Resumo

Ambiente Python local configurado para executar o notebook do Google Colab.

- **Python**: 3.11.14
- **Ambiente Virtual**: `venv/` (dentro de `ml-residencia-ti/`)
- **Dependências**: Todas instaladas e testadas ✓

## 🚀 Como Usar

### 1. Ativar o ambiente virtual e instalar dependências

```bash
# Entre no diretório do projeto
cd ml-residencia-ti

# Ative o ambiente virtual
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt
```

### 2. Iniciar o Jupyter

```bash
jupyter notebook
```

Ou use o JupyterLab:

```bash
jupyter lab
```

### 3. Abrir o notebook

Navegue até `NotebookFinal-3.ipynb` na interface do Jupyter.

### 4. Desativar quando terminar

```bash
deactivate
```

## 📦 Pacotes Instalados

- **pandas** (2.3.3) - Manipulação de dados
- **numpy** (2.3.5) - Computação numérica
- **matplotlib** (3.10.7) - Visualização de dados
- **seaborn** (0.13.2) - Visualização estatística
- **gdown** (5.2.0) - Download de arquivos do Google Drive
- **scipy** (1.16.3) - Computação científica
- **jupyter** (1.1.1) - Ambiente Jupyter

## 🔄 Recriar o Ambiente

Se precisar recriar em outra máquina:

```bash
# 1. Criar ambiente virtual
python3.11 -m venv venv

# 2. Ativar
source venv/bin/activate

# 3. Instalar dependências
pip install -r requirements.txt
```

## 📊 Arquivos de Dados

O notebook baixa automaticamente do Google Drive:
- `anime-dataset-2023.csv` (15.9 MB)
- `user-dataset-2023.csv` (1.16 GB)

## ⚠️ Solução de Problemas

### Erro de importação
Verifique se o ambiente está ativado:
```bash
which python  # Deve apontar para venv/bin/python
```

### Jupyter não reconhece o ambiente
Instale o kernel:
```bash
python -m ipykernel install --user --name=venv --display-name="Python (venv)"
```

## ✅ Verificação

Todos os imports foram testados com sucesso:
- ✓ pandas
- ✓ numpy
- ✓ matplotlib
- ✓ seaborn
- ✓ gdown
- ✓ scipy
- ✓ warnings

