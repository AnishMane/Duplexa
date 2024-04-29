from flask import Flask, request, send_file, jsonify
import os
from werkzeug.utils import secure_filename
import shutil

app = Flask(__name__)

# Folder to store uploaded files
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Folder to store output files
OUTPUT_FOLDER = 'output'
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER

# Allowed extensions for file upload
ALLOWED_EXTENSIONS = {'zip', 'rar', 'tar', 'gz'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Your algorithm implementation in the notebook file
import nbformat
from nbconvert import PythonExporter

def run_notebook(notebook_path, input_folder1, input_folder2, output_folder):
    with open(notebook_path) as f:
        notebook_content = nbformat.read(f, as_version=4)

    exporter = PythonExporter()
    source_code, _ = exporter.from_notebook_node(notebook_content)

    # Execute the notebook code
    exec(source_code, globals())

    # Execute the algorithm
    remove_redundant_data(input_folder1, input_folder2, output_folder)

def zip_folder(folder_path, zip_file_path):
    shutil.make_archive(zip_file_path[:-4], 'zip', folder_path)

@app.route('/upload', methods=['POST'])
def upload_files():
    if 'file1' not in request.files or 'file2' not in request.files:
        return jsonify({'error': 'No file part'})

    file1 = request.files['file1']
    file2 = request.files['file2']

    if file1.filename == '' or file2.filename == '':
        return jsonify({'error': 'No selected file'})

    if file1 and allowed_file(file1.filename) and file2 and allowed_file(file2.filename):
        filename1 = secure_filename(file1.filename)
        filename2 = secure_filename(file2.filename)
        
        input_folder1 = os.path.join(app.config['UPLOAD_FOLDER'], 'folder1')
        input_folder2 = os.path.join(app.config['UPLOAD_FOLDER'], 'folder2')

        os.makedirs(input_folder1, exist_ok=True)
        os.makedirs(input_folder2, exist_ok=True)

        file1.save(os.path.join(input_folder1, filename1))
        file2.save(os.path.join(input_folder2, filename2))

        output_folder_path = os.path.join(app.config['OUTPUT_FOLDER'], 'output_folder')
        os.makedirs(output_folder_path, exist_ok=True)

        run_notebook('D:\Projects\Space Hackathon\Duplexa\Duplexa\Backend\De-Duplification.ipynb', input_folder1, input_folder2, output_folder_path)

        zip_file_path = os.path.join(app.config['OUTPUT_FOLDER'], 'output_folder.zip')
        zip_folder(output_folder_path, zip_file_path)

        return send_file(zip_file_path, as_attachment=True)

    return jsonify({'error': 'File extension not allowed'})

if __name__ == '__main__':
    app.run(debug=True)
