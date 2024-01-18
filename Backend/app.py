from flask import Flask, request, send_file
import os

app = Flask(__name__)

# Your algorithm implementation in the notebook file
import nbformat
from nbconvert import PythonExporter

def run_notebook(notebook_path):
    with open(notebook_path) as f:
        notebook_content = nbformat.read(f, as_version=4)

    exporter = PythonExporter()
    source_code, _ = exporter.from_notebook_node(notebook_content)

    # Execute the notebook code
    exec(source_code, globals())

# Example: Run your notebook containing the algorithm
run_notebook('D:\Space Hackathon\Dataset Temp\test 2\topic12\Data Redundancy Removal Algorithm\Backend\De-Duplification.ipynb')

# Implement your Flask routes below...

if __name__ == '__main__':
    app.run(debug=True)
