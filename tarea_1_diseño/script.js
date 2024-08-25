// script.js

// Función para manejar la carga de archivos
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Aquí procesaremos el archivo Excel
            document.getElementById('uploadStatus').innerText = 'Archivo cargado correctamente';
            console.log(e.target.result); // Esto imprimirá los datos del archivo cargado
        };
        reader.readAsBinaryString(file);
    } else {
        document.getElementById('uploadStatus').innerText = 'Por favor, selecciona un archivo';
    }
});
