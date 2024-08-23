const labels = document.querySelectorAll('.label');
const dropzones = document.querySelectorAll('.dropzone');
const checkButton = document.getElementById('check-results');
const resultContainer = document.getElementById('result');

labels.forEach(label => {
    label.addEventListener('dragstart', dragStart);
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.textContent);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    e.target.textContent = data;
    e.target.style.backgroundColor = '#007bff';
    e.target.style.color = 'white';
    e.target.style.border = 'none';
}

checkButton.addEventListener('click', () => {
    let correct = 0;
    let incorrect = 0;

    dropzones.forEach(dropzone => {
        if (dropzone.textContent === dropzone.dataset.correct) {
            correct++;
        } else if (dropzone.textContent !== '') {
            incorrect++;
        }
    });

    resultContainer.textContent = `Aciertos: ${correct}, Errores: ${incorrect}`;
});
