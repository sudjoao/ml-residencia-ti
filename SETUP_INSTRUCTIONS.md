# Local Python Environment Setup for NotebookFinal-3.ipynb

This document provides instructions for using the local Python environment that has been set up for the Jupyter notebook from Google Colab.

## Environment Details

- **Python Version**: 3.11.14
- **Virtual Environment**: `venv/` (located in the workspace root)
- **Google Colab Default Version**: Python 3.10 (as of December 2024)
- **Local Environment**: Python 3.11 (compatible and close to Colab's environment)

## Installed Dependencies

All required Python packages have been installed:

- **pandas** (2.3.3) - Data manipulation and analysis
- **numpy** (2.3.5) - Numerical computing
- **matplotlib** (3.10.7) - Data visualization
- **seaborn** (0.13.2) - Statistical data visualization
- **gdown** (5.2.0) - Google Drive file downloader
- **scipy** (1.16.3) - Scientific computing
- **jupyter** (1.1.1) - Jupyter notebook environment
- **warnings** (built-in) - Warning control

## Activating the Virtual Environment

### On macOS/Linux:
```bash
source venv/bin/activate
```

### On Windows:
```bash
venv\Scripts\activate
```

After activation, your terminal prompt should show `(venv)` at the beginning.

## Running the Jupyter Notebook

Once the virtual environment is activated, you can start Jupyter:

```bash
jupyter notebook
```

Or use JupyterLab:

```bash
jupyter lab
```

Then navigate to `ml-residencia-ti/NotebookFinal-3.ipynb` in the Jupyter interface.

## Deactivating the Virtual Environment

When you're done working, deactivate the virtual environment:

```bash
deactivate
```

## Reproducing the Environment

If you need to recreate this environment on another machine:

1. Create a new virtual environment:
   ```bash
   python3.11 -m venv venv
   ```

2. Activate it (see above)

3. Install dependencies from requirements.txt:
   ```bash
   pip install -r requirements.txt
   ```

## System Dependencies

**Note**: The notebook does not require any system-level packages (apt-get). All dependencies are Python packages installed via pip.

## Verification

All imports have been tested and verified:
- ✓ pandas
- ✓ numpy
- ✓ matplotlib
- ✓ seaborn
- ✓ gdown
- ✓ scipy
- ✓ warnings

## Data Files

The notebook downloads data files from Google Drive using `gdown`:
- `anime-dataset-2023.csv` (15.9 MB)
- `user-dataset-2023.csv` (1.16 GB)

These files will be downloaded automatically when you run the notebook cells that use `gdown.download()`.

## Troubleshooting

### Import Errors
If you encounter import errors, ensure the virtual environment is activated:
```bash
which python  # Should point to venv/bin/python
```

### Missing Packages
If a package is missing, install it:
```bash
pip install <package-name>
```

### Jupyter Kernel Issues
If Jupyter doesn't recognize the virtual environment, install the kernel:
```bash
python -m ipykernel install --user --name=venv --display-name="Python (venv)"
```

## Additional Notes

- The virtual environment is located in the `venv/` directory and is excluded from version control
- All package versions are frozen in `requirements.txt` for reproducibility
- The environment is compatible with the Google Colab notebook without modifications

